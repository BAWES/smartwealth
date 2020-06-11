import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step8PageRoutingModule } from './step8-routing.module';

import { Step8Page } from './step8.page';
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
    Step8PageRoutingModule
  ],
  declarations: [Step8Page]
})
export class Step8PageModule {}
