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
  // console.log(flights);
  
  
  constructor(private ele : FlightServiceService) { }

  ngOnInit() {
    this.ele.getJSON().subscribe(res => {
      // console.log(res.type)
      this.flights = res
      // console.log(this.flights) 
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
      this.status = this.toggle1 ? 'Enable' : 'Disable';
    }
    else{
      this.ele.getJSON().subscribe(res => {
        // console.log(res.type)
        this.flights = res
        this.toggle1 = false;
        // console.log(this.flights) 
      })
    }
    
  }

  sortByDuration(){
    
    if(this.toggle2 == false){
      this.flights.sort((a, b) => a.flight_hours.localeCompare(b.flight_hours));
      console.log(this.flights)
    
      this.toggle2 = true;
      this.status = this.toggle2 ? 'Enable' : 'Disable';
    }
    else{
      this.ele.getJSON().subscribe(res => {
        // console.log(res.type)
        this.flights = res
        this.toggle2 = false;
        // console.log(this.flights) 
      })
    }
  }

  sortByArrival(){
    if(this.toggle3 == false){
      this.flights.sort((a, b) => a.arrival.localeCompare(b.arrival));
      console.log(this.flights)
    
      this.toggle3 = true;
      this.status = this.toggle3 ? 'Enable' : 'Disable';
    }
    else{
      this.ele.getJSON().subscribe(res => {
        // console.log(res.type)
        this.flights = res
        this.toggle3 = false;
        // console.log(this.flights) 
      })
    }
    
  }

  sortByDeparture(){
    if(this.toggle4 == false){
      this.flights.sort((a, b) => a.departure.localeCompare(b.departure));
      console.log(this.flights)
    
      this.toggle4= true;
      this.status = this.toggle4 ? 'Enable' : 'Disable';
    }
    else{
      this.ele.getJSON().subscribe(res => {
        // console.log(res.type)
        this.flights = res
        this.toggle4 = false;
        // console.log(this.flights) 
      })
    }
  }
}
