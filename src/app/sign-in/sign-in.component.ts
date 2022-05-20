import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'
// import { EventEmitter } from 'stream';
// import {AppComponent} from '../app.component'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // var = new AppComponent
  // var2= this.var.showSignIn

//  @Output() exampleOutput = new EventEmitter<boolean>();

  exampleChild : boolean=true
  isVerified = false;
  submitdata(form : any){
    
    // this.exampleChild=false;
    this.isVerified = true;
    console.log(form)
    // this.exampleOutput.emit(this.exampleChild)
    

    // this.example.emit(this.show)
    // this.var2=false;
  }

}
