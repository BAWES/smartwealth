import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step11Page } from './step11.page';

describe('Step11Page', () => {
  let component: Step11Page;
  let fixture: ComponentFixture<Step11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
