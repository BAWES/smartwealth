import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingProfileSectionsPage } from './pending-profile-sections.page';

const routes: Routes = [
  {
    path: '',
    component: PendingProfileSectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingProfileSectionsPageRoutingModule {}
