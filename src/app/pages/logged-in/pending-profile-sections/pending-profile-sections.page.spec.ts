import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingProfileSectionsPage } from './pending-profile-sections.page';

describe('PendingProfileSectionsPage', () => {
  let component: PendingProfileSectionsPage;
  let fixture: ComponentFixture<PendingProfileSectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingProfileSectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingProfileSectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
