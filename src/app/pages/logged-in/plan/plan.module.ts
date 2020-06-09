import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanPageRoutingModule } from './plan-routing.module';

import { PlanPage } from './plan.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    IonicModule,
    PlanPageRoutingModule
  ],
  declarations: [PlanPage]
})
export class PlanPageModule {}
