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
