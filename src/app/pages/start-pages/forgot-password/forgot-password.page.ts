import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, Platform} from '@ionic/angular';
import { CustomValidator } from 'src/app/validators/custom.validator';


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
      email: ['', [Validators.required, CustomValidator.emailValidator]]
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
