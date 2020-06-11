import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AssetsInfoComponent } from 'src/app/components/assets-info/assets-info.component';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  changeAnswers() {
    this.router.navigate(['question-view', 1]);
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  continue() {
    this.router.navigate(['signup']);
  }

  async openAssetsInfo(type) {
    const modal = await this.modalController.create({
      component: AssetsInfoComponent,
      cssClass: 'assets-info assets-info-' + type,
      componentProps: {
        type : type
      }
    });
    return await modal.present();
  }

}
