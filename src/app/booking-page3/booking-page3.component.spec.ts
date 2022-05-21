import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPage3Component } from './booking-page3.component';

describe('BookingPage3Component', () => {
  let component: BookingPage3Component;
  let fixture: ComponentFixture<BookingPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
