import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { CountryService } from 'src/app/providers/country.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step12',
  templateUrl: './step12.page.html',
  styleUrls: ['./step12.page.scss'],
})
export class Step12Page implements OnInit {
 
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

    let addPowerOfAttorney = localStorage.getItem('addPowerOfAttorney'); 

    this.form = this._fb.group({
      addPowerOfAttorney: [addPowerOfAttorney, Validators.required],
      powerOfAttorneyName: [localStorage.getItem('powerOfAttorneyName'), addPowerOfAttorney == '1' ? Validators.required: null],
      powerOfAttorneyNationality: [localStorage.getItem('powerOfAttorneyNationality'), addPowerOfAttorney == '1' ? Validators.required: null],
      powerOfAttorneyID: [localStorage.getItem('powerOfAttorneyID'), addPowerOfAttorney == '1' ? Validators.required: null],
    }); 

    this.form.get('addPowerOfAttorney').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(value) > -1) {
        this.form.get('powerOfAttorneyName').setValidators(Validators.required);
        this.form.get('powerOfAttorneyNationality').setValidators(Validators.required);
        this.form.get('powerOfAttorneyID').setValidators(Validators.required);
      
      } else {
        this.form.get('powerOfAttorneyName').setValidators(null);
        this.form.get('powerOfAttorneyNationality').setValidators(null);
        this.form.get('powerOfAttorneyID').setValidators(null);
      }

      this.form.controls.powerOfAttorneyName.updateValueAndValidity(); 
      this.form.controls.powerOfAttorneyNationality.updateValueAndValidity(); 
      this.form.controls.powerOfAttorneyID.updateValueAndValidity(); 
      
    }); 
   this.loadCountries();
  }

  loadCountries() {
    this.countryService.list().subscribe(data => {
      this.countrylistData = data;
    })
  }

  setAddPowerOfAttorney(value) {
    this.form.controls.addPowerOfAttorney.setValue(value);
    this.form.controls.addPowerOfAttorney.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if([1, '1'].indexOf(this.form.value.addPowerOfAttorney) == -1) {
      this.form.controls.powerOfAttorneyName.setValue(null); 
      this.form.controls.powerOfAttorneyNationality.setValue(null); 
      this.form.controls.powerOfAttorneyID.setValue(null); 
    } 

    let params = this.form.value;

    this.accountService.saveStep12(params).subscribe(data => {
      this.router.navigate(['pending']);
    });    
  }
}
