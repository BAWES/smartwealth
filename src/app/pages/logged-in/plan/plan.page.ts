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

  public assetsAllocation = [
    {
      'fixed': 80,
      'developed-market': 9,
      'emerging-market': 9,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 70,
      'developed-market': 15,
      'emerging-market': 13,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 60,
      'developed-market': 30,
      'emerging-market': 8,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 50,
      'developed-market': 25,
      'emerging-market': 23,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 40,
      'developed-market': 30,
      'emerging-market': 24,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 40,
      'developed-market': 30,
      'emerging-market': 28,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 40,
      'developed-market': 20,
      'emerging-market': 38,
      'real-estate': 0,
      'cash': 2 
    },
    {
      'fixed': 35,
      'developed-market': 25,
      'emerging-market': 30,
      'real-estate': 8,
      'cash': 2 
    },
    {
      'fixed': 40,
      'developed-market': 10,
      'emerging-market': 38,
      'real-estate': 10,
      'cash': 2 
    },
    {
      'fixed': 29,
      'developed-market': 30,
      'emerging-market': 9,
      'real-estate': 30,
      'cash': 2 
    }
  ]
  
  public riskFactor = 6;

  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  increaseRisk() {
    if(this.riskFactor == 10)
      return false; 
      
    this.riskFactor++;
  }
  
  decreaseRisk() {
    if(this.riskFactor == 1)
      return false; 

    this.riskFactor--;
  }

  changeAnswers() {
    this.router.navigate(['question-view', 1]);
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  continue() {
    if(this.authService.isLoggedIn ) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['register']);
    }
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
