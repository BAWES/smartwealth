import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step7Page } from './step7.page';

const routes: Routes = [
  {
    path: '',
    component: Step7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step7PageRoutingModule {}
