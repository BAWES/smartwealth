import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionViewPageRoutingModule } from './question-view-routing.module';

import { QuestionViewPage } from './question-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuestionViewPageRoutingModule
  ],
  declarations: [QuestionViewPage]
})
export class QuestionViewPageModule {}
