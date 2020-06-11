import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Dashboard',
      url: '/folder',
      icon: 'rocket'
    },
    {
      title: 'Settings',
      url: '/folder/Settings',
      icon: 'settings'
    },
    {
      title: 'عربي',
      url: '/folder/Arabic',
      icon: 'globe'
    },
    {
      title: 'Logout',
      url: '/start',
      icon: 'power'
    }
  ];
  public labels = ['Portfolio', 'Accounts', 'Investments'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
