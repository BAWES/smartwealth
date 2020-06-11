import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step8Page } from './step8.page';

describe('Step8Page', () => {
  let component: Step8Page;
  let fixture: ComponentFixture<Step8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
