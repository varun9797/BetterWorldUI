import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyRegComponent } from './society-reg.component';

describe('SocietyRegComponent', () => {
  let component: SocietyRegComponent;
  let fixture: ComponentFixture<SocietyRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
