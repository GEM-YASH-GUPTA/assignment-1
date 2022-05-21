import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'


@Component({
  selector: 'app-booking-page3',
  templateUrl: './booking-page3.component.html',
  styleUrls: ['./booking-page3.component.css']
})
export class BookingPage3Component implements OnInit {

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
