import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step9Page } from './step9.page';

describe('Step9Page', () => {
  let component: Step9Page;
  let fixture: ComponentFixture<Step9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
