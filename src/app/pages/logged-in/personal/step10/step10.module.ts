import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step10PageRoutingModule } from './step10-routing.module';

import { Step10Page } from './step10.page';
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
    Step10PageRoutingModule
  ],
  declarations: [Step10Page]
})
export class Step10PageModule {}
