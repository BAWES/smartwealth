import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-pending-profile-sections',
  templateUrl: './pending-profile-sections.page.html',
  styleUrls: ['./pending-profile-sections.page.scss'],
})
export class PendingProfileSectionsPage implements OnInit {

  shownGroup = null;
  constructor(
      public navCtrl: NavController
  ) { }

  ngOnInit() {

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }
}
