import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
})
export class Step4Page implements OnInit {

  public countrylistData = [];

  public form: FormGroup;

  public relationlistData = [
    { relation: 'Parent' },
    { relation: 'Child' },
    { relation: 'Spouse' },
    { relation: 'Sibling' },
    { relation: 'Cousin' },
    { relation: 'Aunt or Uncle' }
  ];

  public positionlistData = [
    { position: 'Royal Family' },
    { position: 'Member of Parliament' },
    { position: 'Senior Government Officer' },
    { position: 'Senior Military' },
    { position: 'Current or former senior position in an international organization' },
    { position: 'Senior Executive in a company owned by the State' }
  ];  

  constructor(
    public router: Router,
    public _fb: FormBuilder, 
    public navCtrl: NavController,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let isPoliticallyExposed = localStorage.getItem('isPoliticallyExposed');
    let havePoliticalPosition = localStorage.getItem('havePoliticalPosition');

    this.form = this._fb.group({
      isPoliticallyExposed: [isPoliticallyExposed, Validators.required],
      havePoliticalPosition: [havePoliticalPosition, isPoliticallyExposed == '1'? Validators.required: null],
      politicalPositionName: [localStorage.getItem('politicalPositionName'), isPoliticallyExposed == '1' && havePoliticalPosition == '2'? Validators.required: null],
      politicalPositionRelation: [localStorage.getItem('politicalPositionRelation'), isPoliticallyExposed == '1' && havePoliticalPosition == '2'? Validators.required: null],
      politicalPosition: [localStorage.getItem('politicalPosition'), isPoliticallyExposed == '1'? Validators.required: null]    
    });
    
    this.form.get('isPoliticallyExposed').valueChanges.subscribe(value => {

      if([1, '1'].indexOf(value) > -1) {

        this.form.get('havePoliticalPosition').setValidators(Validators.required);
        this.form.get('politicalPosition').setValidators(Validators.required);

        if([2, '2'].indexOf(this.form.controls.havePoliticalPosition.value) > -1) {
          this.form.get('politicalPositionName').setValidators(Validators.required);
          this.form.get('politicalPositionRelation').setValidators(Validators.required);
        } else {
          this.form.get('politicalPositionName').setValidators(null);
          this.form.get('politicalPositionRelation').setValidators(null);
        }

      } else {

        this.form.get('havePoliticalPosition').setValidators(null);
        this.form.get('politicalPosition').setValidators(null);
        this.form.get('politicalPositionName').setValidators(null);
        this.form.get('politicalPositionRelation').setValidators(null);
      }

      this.form.controls.havePoliticalPosition.updateValueAndValidity();
      this.form.controls.politicalPosition.updateValueAndValidity();
      this.form.controls.politicalPositionName.updateValueAndValidity();
      this.form.controls.politicalPositionRelation.updateValueAndValidity();
    }); 

    this.form.get('havePoliticalPosition').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(this.form.controls.isPoliticallyExposed.value) > -1 && [2, '2'].indexOf(value) > -1) {
        this.form.get('politicalPositionName').setValidators(Validators.required);
        this.form.get('politicalPositionRelation').setValidators(Validators.required);
      } else {
        this.form.get('politicalPositionName').setValidators(null);
        this.form.get('politicalPositionRelation').setValidators(null);
      }

      this.form.controls.politicalPositionName.updateValueAndValidity();
      this.form.controls.politicalPositionRelation.updateValueAndValidity();
    }); 
  }

  updateFormValidation() {
    this.form.updateValueAndValidity();
  }

  setHavePoliticalPosition(value) {
    this.form.controls.havePoliticalPosition.setValue(value);
    this.form.controls.havePoliticalPosition.updateValueAndValidity();    
  }

  setIsPoliticallyExposed(value) {
      this.form.controls.isPoliticallyExposed.setValue(value);
      this.form.controls.isPoliticallyExposed.updateValueAndValidity();
  } 

  ionViewWillEnter() {
    this.authService.disableMenu = true; 
  }

  back() {
    this.navCtrl.back();
  }

  continue() {
    
    if([1, '1'].indexOf(this.form.value.isPoliticallyExposed) == -1) {
      this.form.controls.havePoliticalPosition.setValue(null);
      this.form.controls.politicalPosition.setValue(null);
      this.form.controls.politicalPositionName.setValue(null);
      this.form.controls.politicalPositionRelation.setValue(null);
      this.form.updateValueAndValidity();
    }

    if([1, '1'].indexOf(this.form.value.havePoliticalPosition) > -1) {
      this.form.controls.politicalPositionName.setValue('');
      this.form.controls.politicalPositionRelation.setValue('');
      this.form.updateValueAndValidity();
    }

    let params = this.form.value;

    this.accountService.saveStep4(params).subscribe(data => {
      this.router.navigate(['step5']);
    });    
  }
}
