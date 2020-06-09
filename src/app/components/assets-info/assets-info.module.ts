import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsInfoComponent } from './assets-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AssetsInfoComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    AssetsInfoComponent,
  ]
})
export class AssetsInfoModule { }
