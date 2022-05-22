import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  
  // getting data from local json
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

  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  toggle4 = false;
  status = 'Enable'; 


  issorted = true;
  sortByPrice(){
    if(this.toggle1 == false){
      this.flights.sort((a, b) => Number(a.price) - Number(b.price));
      console.log(this.flights)
    
      this.toggle1 = true;
    }
    else{
      this.ele.getJSON().subscribe(res => {
        this.flights = res
        this.toggle1 = false;
      })
    }
    
  }

  sortByDuration(){
    
    if(this.toggle2 == false){
      this.flights.sort((a, b) => a.flight_hours.localeCompare(b.flight_hours));
      console.log(this.flights)
    
      this.toggle2 = true;
    }
    else{
      this.ele.getJSON().subscribe(res => {
        this.flights = res
        this.toggle2 = false;
      })
    }
  }

  sortByArrival(){
    if(this.toggle3 == false){
      this.flights.sort((a, b) => a.arrival.localeCompare(b.arrival));
      console.log(this.flights)
    
      this.toggle3 = true;
    }
    else{
      this.ele.getJSON().subscribe(res => {
        this.flights = res
        this.toggle3 = false;
      })
    }
    
  }

  sortByDeparture(){
    if(this.toggle4 == false){
      this.flights.sort((a, b) => a.departure.localeCompare(b.departure));
      console.log(this.flights)
    
      this.toggle4= true;
    }
    else{
      this.ele.getJSON().subscribe(res => {
        this.flights = res
        this.toggle4 = false;
      })
    }
  }

}
