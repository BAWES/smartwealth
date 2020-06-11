import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step9Page } from './step9.page';

const routes: Routes = [
  {
    path: '',
    component: Step9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step9PageRoutingModule {}
