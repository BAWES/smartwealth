import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step5Page } from './step5.page';

describe('Step5Page', () => {
  let component: Step5Page;
  let fixture: ComponentFixture<Step5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
