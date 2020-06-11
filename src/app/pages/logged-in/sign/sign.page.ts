import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }
  
  continue() {
    this.navCtrl.navigateRoot(['dashboard']);
  }

  back() {
    this.navCtrl.back();
  }
}
