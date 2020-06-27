import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {FusionChartsModule} from 'angular-fusioncharts';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    FusionChartsModule,
    NgApexchartsModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
