import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step12Page } from './step12.page';

const routes: Routes = [
  {
    path: '',
    component: Step12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step12PageRoutingModule {}
