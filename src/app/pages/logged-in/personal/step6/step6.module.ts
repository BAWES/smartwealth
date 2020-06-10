import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step6PageRoutingModule } from './step6-routing.module';

import { Step6Page } from './step6.page';
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
    Step6PageRoutingModule
  ],
  declarations: [Step6Page]
})
export class Step6PageModule {}
