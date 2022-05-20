import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPage1Component } from './booking-page1.component';

describe('BookingPage1Component', () => {
  let component: BookingPage1Component;
  let fixture: ComponentFixture<BookingPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
