import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
      public platform: Platform,
      public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  /**
   * login page
   */
  login(){
    this.navCtrl.navigateForward('/login');
  }
}
