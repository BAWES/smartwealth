import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step11Page } from './step11.page';

const routes: Routes = [
  {
    path: '',
    component: Step11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step11PageRoutingModule {}
