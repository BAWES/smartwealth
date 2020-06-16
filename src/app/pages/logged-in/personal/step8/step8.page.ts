import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-step8',
  templateUrl: './step8.page.html',
  styleUrls: ['./step8.page.scss'],
})
export class Step8Page implements OnInit {
 
  public form: FormGroup;
  
  constructor(
    public router: Router,
    public _fb: FormBuilder, 
    public platform: Platform,
    public navCtrl: NavController,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    let haveRelationship =localStorage.getItem('haveRelationship'); 
    let existingClient  = localStorage.getItem('existingClient'); 

    this.form = this._fb.group({
      bank: [localStorage.getItem('bank'), Validators.required],
      existingClient: [existingClient],
      haveRelationship: [haveRelationship, existingClient == '1' ? Validators.required: null],
      relationship: [localStorage.getItem('relationship'), haveRelationship == '1' ? Validators.required: null]
    }); 

    this.form.get('existingClient').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(value) > -1) {
        this.form.get('haveRelationship').setValidators(Validators.required);
      } else {
        this.form.get('haveRelationship').setValidators(null);
      }

      this.form.controls.haveRelationship.updateValueAndValidity(); 
    }); 

    this.form.get('haveRelationship').valueChanges.subscribe(value => {
 
      if([1, '1'].indexOf(value) > -1) {
        this.form.get('relationship').setValidators(Validators.required);
      } else {
        this.form.get('relationship').setValidators(null);
      }

      this.form.controls.relationship.updateValueAndValidity(); 
    }); 
  } 

  setHaveRelationship(value) {
    this.form.controls.haveRelationship.setValue(value);
    this.form.controls.haveRelationship.updateValueAndValidity();
  }

  setExistingClient(value) {
    this.form.controls.existingClient.setValue(value);
    this.form.controls.existingClient.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if([1, '1'].indexOf(this.form.value.existingClient) == -1) {
      this.form.controls.haveRelationship.setValue(null); 
    } 

    if([1, '1'].indexOf(this.form.value.haveRelationship) == -1) {
      this.form.controls.relationship.setValue(null); 
    } 

    let params = this.form.value;

    this.accountService.saveStep8(params).subscribe(data => {
      this.router.navigate(['step9']);
    });    
  }
}
