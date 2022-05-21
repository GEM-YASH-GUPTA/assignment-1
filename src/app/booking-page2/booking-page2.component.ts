import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'

@Component({
  selector: 'app-booking-page2',
  templateUrl: './booking-page2.component.html',
  styleUrls: ['./booking-page2.component.css']
})
export class BookingPage2Component implements OnInit {

  
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
