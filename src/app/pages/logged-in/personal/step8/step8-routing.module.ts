import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step8Page } from './step8.page';

const routes: Routes = [
  {
    path: '',
    component: Step8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step8PageRoutingModule {}
