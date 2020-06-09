import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  private forgotForm: FormGroup;
  public email;
  public password;
  public isLoading = false;
  constructor(
      public platform: Platform,
      public navCtrl: NavController,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  submit() {
    if (this.forgotForm.valid) {
      this.back();
    }
  }

  back() {
    this.navCtrl.back();
  }
}
