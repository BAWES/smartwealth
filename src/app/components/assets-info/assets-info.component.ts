import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assets-info',
  templateUrl: './assets-info.component.html',
  styleUrls: ['./assets-info.component.scss'],
})
export class AssetsInfoComponent implements OnInit {

  @Input() type: string; 

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
