import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {FusionChartsModule} from 'angular-fusioncharts';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardPageRoutingModule,
        FusionChartsModule,
        NgApexchartsModule
    ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
