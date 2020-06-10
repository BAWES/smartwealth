import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SelectSearchInputComponent } from './select-search-input/select-search-input';
import { SelectSearchPage } from './select-search-page/select-search-page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SelectSearchInputComponent, 
    SelectSearchPage
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SelectSearchInputComponent]
})
export class SelectSearchModule { } 