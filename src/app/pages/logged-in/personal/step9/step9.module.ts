import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step9PageRoutingModule } from './step9-routing.module';

import { Step9Page } from './step9.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SelectSearchModule } from 'src/app/components/select-search/select-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HeaderModule,
    SelectSearchModule,
    Step9PageRoutingModule
  ],
  declarations: [Step9Page]
})
export class Step9PageModule {}
