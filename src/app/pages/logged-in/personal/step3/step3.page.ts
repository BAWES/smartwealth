import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { CountryService } from 'src/app/providers/country.service';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  public countrylistData = [];

  public form: FormGroup;

  constructor(
    public router: Router,
    public _fb: FormBuilder,
    public countryService: CountryService,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let isGuardianshpAccount = localStorage.getItem('isGuardianshpAccount') ? parseInt(localStorage.getItem('isGuardianshpAccount')): null;

    this.form = this._fb.group({
      isGuardianshpAccount: [isGuardianshpAccount, Validators.required],
      guardianFullName: [localStorage.getItem('guardianFullName')],
      guardianNationality: [localStorage.getItem('guardianNationality')],
      guardianCivilIdNumber: [localStorage.getItem('guardianCivilIdNumber')]
    });
    
    this.form.get('isGuardianshpAccount').valueChanges.subscribe(value => {

      if([1, '1'].indexOf(value) > -1) {

        this.form.get('guardianFullName').setValidators(Validators.required);
        this.form.get('guardianNationality').setValidators(Validators.required);
        this.form.get('guardianCivilIdNumber').setValidators(Validators.required);
      } else {

        this.form.get('guardianFullName').setValidators(null);
        this.form.get('guardianNationality').setValidators(null);
        this.form.get('guardianCivilIdNumber').setValidators(null);
      }

      this.form.controls.guardianFullName.updateValueAndValidity();
      this.form.controls.guardianNationality.updateValueAndValidity();
      this.form.controls.guardianCivilIdNumber.updateValueAndValidity();

    });

    this.loadCountries();
  }

  setIsGuardianshpAccount(value) {
    setTimeout(() => {
      this.form.controls.isGuardianshpAccount.setValue(value);
      this.form.controls.isGuardianshpAccount.updateValueAndValidity();
    })
  }

  loadCountries() {
    this.countryService.list().subscribe(data => {
      this.countrylistData = data;
    })
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
    console.log(1);
  }

  ionViewDidLeave() {
    this.authService.disableMenu = false;
  } 

  continue() {

    if([1, '1'].indexOf(this.form.value.isGuardianshpAccount) == -1) {
      this.form.controls.guardianFullName.setValue(null);
      this.form.controls.guardianNationality.setValue(null);
      this.form.controls.guardianCivilIdNumber.setValue(null);
      this.form.updateValueAndValidity();
    }

    let params = this.form.value;

    this.accountService.saveStep3(params).subscribe(data => {
      this.router.navigate(['step4']);
    });    
  }
}
