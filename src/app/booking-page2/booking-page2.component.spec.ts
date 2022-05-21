import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPage2Component } from './booking-page2.component';

describe('BookingPage2Component', () => {
  let component: BookingPage2Component;
  let fixture: ComponentFixture<BookingPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
