import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { CountryService } from 'src/app/providers/country.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step11',
  templateUrl: './step11.page.html',
  styleUrls: ['./step11.page.scss'],
})
export class Step11Page implements OnInit {
 
  public form: FormGroup;
  
  public relationlistData = [
    { relation: 'Parent' },
    { relation: 'Child' },
    { relation: 'Spouse' },
    { relation: 'Sibling' },
    { relation: 'Cousin' },
    { relation: 'Aunt or Uncle' }
  ];

  public countrylistData = [];

  constructor(
    public router: Router,
    public _fb: FormBuilder, 
    public navCtrl: NavController,
    public countryService:CountryService,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let applyForSomeoneElse = localStorage.getItem('applyForSomeoneElse'); 

    this.form = this._fb.group({
      applyForSomeoneElse: [applyForSomeoneElse, Validators.required],
      beneficiaryName: [localStorage.getItem('beneficiaryName'), applyForSomeoneElse == '2' ? Validators.required: null],
      beneficiaryRelation: [localStorage.getItem('beneficiaryRelation'), applyForSomeoneElse == '2' ? Validators.required: null],
      beneficiaryNationality: [localStorage.getItem('beneficiaryNationality'), applyForSomeoneElse == '2' ? Validators.required: null],
      beneficiaryAddress: [localStorage.getItem('beneficiaryAddress'), applyForSomeoneElse == '2' ? Validators.required: null],
      beneficiaryID: [localStorage.getItem('beneficiaryID'), applyForSomeoneElse == '2' ? Validators.required: null]
    }); 

    this.form.get('applyForSomeoneElse').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(value) > -1) {
        this.form.get('beneficiaryName').setValidators(Validators.required);
        this.form.get('beneficiaryRelation').setValidators(Validators.required);
        this.form.get('beneficiaryNationality').setValidators(Validators.required);
        this.form.get('beneficiaryAddress').setValidators(Validators.required);
        this.form.get('beneficiaryID').setValidators(Validators.required);

      } else {
        this.form.get('beneficiaryName').setValidators(null);
        this.form.get('beneficiaryRelation').setValidators(null);
        this.form.get('beneficiaryNationality').setValidators(null);
        this.form.get('beneficiaryAddress').setValidators(null);
        this.form.get('beneficiaryID').setValidators(null);
      }

      this.form.controls.beneficiaryName.updateValueAndValidity(); 
      this.form.controls.beneficiaryRelation.updateValueAndValidity(); 
      this.form.controls.beneficiaryNationality.updateValueAndValidity(); 
      this.form.controls.beneficiaryAddress.updateValueAndValidity(); 
      this.form.controls.beneficiaryID.updateValueAndValidity(); 

    }); 
   this.loadCountries();
  }

  loadCountries() {
    this.countryService.list().subscribe(data => {
      this.countrylistData = data;
    })
  }

  setApplyForSomeoneElse(value) {
    this.form.controls.applyForSomeoneElse.setValue(value);
    this.form.controls.applyForSomeoneElse.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if([1, '1'].indexOf(this.form.value.applyForSomeoneElse) == -1) {
      this.form.controls.beneficiaryName.setValue(null); 
      this.form.controls.beneficiaryRelation.setValue(null); 
      this.form.controls.beneficiaryNationality.setValue(null); 
      this.form.controls.beneficiaryAddress.setValue(null); 
      this.form.controls.beneficiaryID.setValue(null); 
    } 

    let params = this.form.value;

    this.accountService.saveStep11(params).subscribe(data => {
      this.router.navigate(['step12']);
    });    
  }
}
