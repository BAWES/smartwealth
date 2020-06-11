import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step10',
  templateUrl: './step10.page.html',
  styleUrls: ['./step10.page.scss'],
})
export class Step10Page implements OnInit {
 
  public form: FormGroup;
  
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public _fb: FormBuilder, 
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let payTaxInAnotherCountry = parseInt(localStorage.getItem('payTaxInAnotherCountry')) > 0 ? localStorage.getItem('payTaxInAnotherCountry') : 2; 

    this.form = this._fb.group({
      payTaxInAnotherCountry: [payTaxInAnotherCountry, Validators.required],
      taxCountry: new FormArray([]),
    });

    console.log( localStorage.getItem('taxCountry'));

    let taxCountry = [];
    
    try {
      taxCountry = JSON.parse(localStorage.getItem('taxCountry'));
    } catch (error) {      
    } 

    for(let a of taxCountry) {
      this.taxCountry.push(this._fb.group({
        country: [a.country, Validators.required],
        id: [a.id, [Validators.required]]
      })); 
    }
    
    this.form.get('payTaxInAnotherCountry').valueChanges.subscribe(value => {
      if(value && (!this.form.value.taxCountry || this.form.value.taxCountry.length == 0)) {
        this.addAnotherCountry();
      }
    });
  } 

  removeCountry(index) {
    this.taxCountry.removeAt(index);
  }

  get taxCountry() { return this.form.controls.taxCountry as FormArray; }

  addAnotherCountry() { 

    this.taxCountry.push(this._fb.group({
      country: ['', Validators.required],
      id: ['', [Validators.required]]
    })); 
  }

  setPayTaxInAnotherCountry(value) {
    this.form.controls.payTaxInAnotherCountry.setValue(value);
    this.form.controls.payTaxInAnotherCountry.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  ionViewDidLeave() {
    this.authService.disableMenu = false;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if([1, '1'].indexOf(this.form.value.payTaxInAnotherCountry) == -1) {
      this.form.controls.taxCountry.setValue([]); 
    } 

    let params = this.form.value;

    this.accountService.saveStep10(params).subscribe(data => {
      this.router.navigate(['step11']);
    });    
  }
}
