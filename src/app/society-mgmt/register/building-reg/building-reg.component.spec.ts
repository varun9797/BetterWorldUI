import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingRegComponent } from './building-reg.component';

describe('BuildingRegComponent', () => {
  let component: BuildingRegComponent;
  let fixture: ComponentFixture<BuildingRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
