import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlterTransactionButtonComponent } from './flter-transaction-button.component';

describe('FlterTransactionButtonComponent', () => {
  let component: FlterTransactionButtonComponent;
  let fixture: ComponentFixture<FlterTransactionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlterTransactionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlterTransactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
