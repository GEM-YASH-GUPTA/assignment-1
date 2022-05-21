import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVerified = false; 
  submitdata(form : any){
    console.log(form.value.password)
    if( form.valid && form.value.username == 'admin' && form.value.password == 'Admin@123' ){
      
      this.isVerified = true;
    }
    else{
      alert("Please enter correct details")
    }
    
  }

}
