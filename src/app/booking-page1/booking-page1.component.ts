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
  // console.log(flights);
  
  
  constructor(private ele : FlightServiceService) { }

  ngOnInit() {
    this.ele.getJSON().subscribe(res => {
      // console.log(res.type)
      this.flights = res
      // console.log(this.flights) 
    })
  }

}
