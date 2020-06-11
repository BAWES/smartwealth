import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step10Page } from './step10.page';

describe('Step10Page', () => {
  let component: Step10Page;
  let fixture: ComponentFixture<Step10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
