import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRegComponent } from './flat-reg.component';

describe('FlatRegComponent', () => {
  let component: FlatRegComponent;
  let fixture: ComponentFixture<FlatRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
