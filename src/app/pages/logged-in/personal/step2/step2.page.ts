import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { CountryService } from 'src/app/providers/country.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  public countrylistData = [];

  public form: FormGroup;

  public minExpiry;

  constructor(
    public router: Router,
    public _fb: FormBuilder,
    public navCtrl: NavController,
    public countryService: CountryService,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let today = new Date();

    this.minExpiry = today.toISOString();

    let isKuwaity = localStorage.getItem('nationality') == 'Kuwait';

    this.form = this._fb.group({
      nationality: [localStorage.getItem('nationality'), Validators.required],
      passport: [localStorage.getItem('passport')],
      passportCountry: [localStorage.getItem('passportCountry')],
      passportExpiry: [localStorage.getItem('passportExpiry')]
    });
    
    this.form.get('nationality').valueChanges.subscribe(value => {
      if(value != 'Kuwait') {
        this.form.get('passport').setValidators(Validators.required);
        this.form.get('passportCountry').setValidators(Validators.required);
        this.form.get('passportExpiry').setValidators(Validators.required);
      } else {
        this.form.get('passport').setValidators(null);
        this.form.get('passportCountry').setValidators(null);
        this.form.get('passportExpiry').setValidators(null);
      }

      this.form.updateValueAndValidity();
    });

    this.loadCountries();
  }

  loadCountries() {
    this.countryService.list().subscribe(data => {
      this.countrylistData = data;
    })
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

    if(this.form.value.nationality == 'Kuwait') {
      this.form.controls.passport.setValue(null);
      this.form.controls.passportCountry.setValue(null);
      this.form.controls.passportExpiry.setValue(null);
      this.form.updateValueAndValidity();
    }

    let params = this.form.value;

    this.accountService.saveStep2(params).subscribe(data => {
      this.router.navigate(['step3']);
    });    
  }
}
