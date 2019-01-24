import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneTypesComponent } from './lane-types.component';

describe('LaneTypesComponent', () => {
  let component: LaneTypesComponent;
  let fixture: ComponentFixture<LaneTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
