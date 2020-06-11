import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step9',
  templateUrl: './step9.page.html',
  styleUrls: ['./step9.page.scss'],
})
export class Step9Page implements OnInit {
 
  public form: FormGroup;
  
  constructor(
    public router: Router,
    public _fb: FormBuilder, 
    public navCtrl: NavController,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let isUSCitizen = parseInt(localStorage.getItem('isUSCitizen')) > 0 ? localStorage.getItem('isUSCitizen') : 2; 

    this.form = this._fb.group({
      isUSCitizen: [isUSCitizen, Validators.required],
      taxPayerIDNumber: [localStorage.getItem('taxPayerIDNumber'), isUSCitizen == 2 ? Validators.required: null],
      usAddress1: [localStorage.getItem('usAddress1'), isUSCitizen == 2 ? Validators.required: null],
      usAddress2: [localStorage.getItem('usAddress2'), isUSCitizen == 2 ? Validators.required: null]
    }); 

    this.form.get('isUSCitizen').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(value) > -1) {
        this.form.get('taxPayerIDNumber').setValidators(Validators.required);
        this.form.get('usAddress1').setValidators(Validators.required);
        this.form.get('usAddress1').setValidators(Validators.required);
      } else {
        this.form.get('taxPayerIDNumber').setValidators(null);
        this.form.get('usAddress1').setValidators(null);
        this.form.get('usAddress1').setValidators(null);
      }

      this.form.controls.taxPayerIDNumber.updateValueAndValidity(); 
    }); 
  } 

  setIsUSCitizen(value) {
    this.form.controls.isUSCitizen.setValue(value);
    this.form.controls.isUSCitizen.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if([1, '1'].indexOf(this.form.value.isUSCitizen) == -1) {
      this.form.controls.taxPayerIDNumber.setValue(null); 
      this.form.controls.usAddress1.setValue(null); 
      this.form.controls.usAddress2.setValue(null); 
    } 

    let params = this.form.value;

    this.accountService.saveStep9(params).subscribe(data => {
      this.router.navigate(['step10']);
    });    
  }
}
