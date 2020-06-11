import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step12Page } from './step12.page';

describe('Step12Page', () => {
  let component: Step12Page;
  let fixture: ComponentFixture<Step12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
