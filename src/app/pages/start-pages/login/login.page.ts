import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm: FormGroup;
  public email;
  public password;
  public isLoading = false;
  constructor(
      public platform: Platform,
      public router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidator.emailValidator]],
      password: ['', Validators.required],
    });
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  login() {
    //this.isLoading = true;
    this.router.navigate(['dashboard']);
  }
}
