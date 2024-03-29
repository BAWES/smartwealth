import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public stage = null;
  
  public uploadTxt = null;

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.stage = this.activatedRoute.snapshot.paramMap.get('stage');
    if (this.stage == 'front') {
      this.uploadTxt = 'Civil ID Front';
    } else if (this.stage == 'back') {
      this.uploadTxt = 'Civil ID Back';
    } else if (this.stage == 'dl') {
      this.uploadTxt = 'Driving License of Passport';
    }
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  continue() {
    let url;
    if (!this.stage) {
      url = '/upload/front';
    } else if (this.stage == 'front') {
      url = '/upload/back';
    } else if (this.stage == 'back') {
      url = '/upload/dl';
    } else {
      url = '/sign';
    }
    this.navCtrl.navigateForward(url);
  }

}
