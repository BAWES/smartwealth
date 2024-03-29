import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionViewPage } from './question-view.page';

const routes: Routes = [
  {
    path: ':question_uuid',
    component: QuestionViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionViewPageRoutingModule {}
