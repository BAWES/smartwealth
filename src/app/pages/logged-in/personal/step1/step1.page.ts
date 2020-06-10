import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { CountryService } from 'src/app/providers/country.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

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

    let gender = localStorage.getItem('gender')? parseInt(localStorage.getItem('gender')): null;

    this.form = this._fb.group({
      gender: [gender, Validators.required],
      firstName: [localStorage.getItem('firstName'), Validators.required],
      lastName: [localStorage.getItem('lastName'), Validators.required],
      middleName: [localStorage.getItem('middleName'), Validators.required],
      country: [localStorage.getItem('country'), Validators.required],
      dob: [localStorage.getItem('dob'), Validators.required],
      civilId: [localStorage.getItem('civilId'), Validators.required],
      civilIdSerialNumber: [localStorage.getItem('civilIdSerialNumber'), Validators.required],
      civilIdExpiryDate: [localStorage.getItem('civilIdExpiryDate'), Validators.required],
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

  setGender(value) {
    this.form.controls.gender.setValue(value);
    this.form.updateValueAndValidity();
  }

  continue() {

    let params = this.form.value;

    this.accountService.saveStep1(params).subscribe(data => {
      this.router.navigate(['step2']);
    });    
  }
}
