import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingProfileSectionsPageRoutingModule } from './pending-profile-sections-routing.module';

import { PendingProfileSectionsPage } from './pending-profile-sections.page';
import {HeaderModule} from '../../../components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PendingProfileSectionsPageRoutingModule,
        HeaderModule
    ],
  declarations: [PendingProfileSectionsPage]
})
export class PendingProfileSectionsPageModule {}
