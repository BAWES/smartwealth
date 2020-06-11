import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step10Page } from './step10.page';

const routes: Routes = [
  {
    path: '',
    component: Step10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step10PageRoutingModule {}
