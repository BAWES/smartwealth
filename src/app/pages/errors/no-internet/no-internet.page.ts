import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
//services
import { AuthService } from 'src/app/providers/auth.service';
import { EventService } from 'src/app/providers/event.service';


@Component({
  selector: 'no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {

  handler;
  
  constructor(
    public toastCtrl: ToastController,
    public eventService: EventService,
    public _auth: AuthService
  ) { 
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    
    if (navigator.onLine) {
      return this.refresh();
    }

    this.handler = _ => {
      this.refresh();
    };

    window.addEventListener('online',  this.handler);
  }

  ionViewWillLeave() {
    window.removeEventListener('online', this.handler);
  }

  /**
   * Open navigation page to check internet connectivity 
   */
  refresh() {
    if(navigator.onLine) {

      this.eventService.internetOnline$.next();
      
      this.toastCtrl.create({
        message: 'You are online.',
        duration: 2000
      })
      .then(
        toast => toast.present()
      );
      
    } else {

      this.toastCtrl.create({
        message: 'You are still offline!',
        duration: 2000
      })
      .then(
        toast => toast.present()
      );
    }
  }
} 

