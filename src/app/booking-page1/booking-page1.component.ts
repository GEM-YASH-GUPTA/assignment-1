import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'

@Component({
  selector: 'app-booking-page1',
  templateUrl: './booking-page1.component.html',
  styleUrls: ['./booking-page1.component.css']
})
export class BookingPage1Component implements OnInit {

  public flights  =[{
    id: "",
    name: "",
    image : "",
    departure: "",
    arrival: "",
    flight_hours:"",
    price: "",
    emi :""
  }]

  constructor(private ele : FlightServiceService) { }

  ngOnInit() {
    this.ele.getJSON().subscribe(res => {
      this.flights = res
    })
  }

}
