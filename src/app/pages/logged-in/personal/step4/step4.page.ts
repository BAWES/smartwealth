import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';


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
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let isPoliticallyExposed = localStorage.getItem('isPoliticallyExposed') ? parseInt(localStorage.getItem('isPoliticallyExposed')): null;
    let havePoliticalPosition = localStorage.getItem('havePoliticalPosition') ? parseInt(localStorage.getItem('havePoliticalPosition')): null;

    this.form = this._fb.group({
      isPoliticallyExposed: [isPoliticallyExposed, Validators.required],
      havePoliticalPosition: [havePoliticalPosition],
      politicalPositionName: [localStorage.getItem('politicalPositionName')],
      politicalPositionRelation: [localStorage.getItem('politicalPositionRelation')],
      position: [localStorage.getItem('position')]
    });
    
    this.form.get('isPoliticallyExposed').valueChanges.subscribe(value => {

      if([1, '1'].indexOf(value) > -1) {

        this.form.get('havePoliticalPosition').setValidators(Validators.required);
        this.form.get('position').setValidators(Validators.required);

        if(!this.form.value.havePoliticalPosition) {
          this.form.controls.havePoliticalPosition.setValue(2);
        }
      } else {

        this.form.get('havePoliticalPosition').setValidators(null);
        this.form.get('position').setValidators(null);
      }

      this.form.controls.havePoliticalPosition.updateValueAndValidity();
      this.form.controls.position.updateValueAndValidity();
    }); 

    this.form.get('havePoliticalPosition').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(this.form.value.isPoliticallyExposed) > -1 && [2, '2'].indexOf(value) > -1) {
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

  ionViewDidLeave() {
    this.authService.disableMenu = false;
  } 

  continue() {
    
    if([1, '1'].indexOf(this.form.value.isPoliticallyExposed) == -1) {
      this.form.controls.havePoliticalPosition.setValue(null);
      this.form.controls.position.setValue(null);
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
