import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecieptComponent } from './monthly-reciept.component';

describe('MonthlyRecieptComponent', () => {
  let component: MonthlyRecieptComponent;
  let fixture: ComponentFixture<MonthlyRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
