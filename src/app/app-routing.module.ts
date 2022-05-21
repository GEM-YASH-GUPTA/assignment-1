import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsPageComponent} from './details-page/details-page.component'
import {SignInComponent} from './sign-in/sign-in.component'
import {BookingPage1Component} from './booking-page1/booking-page1.component'
import {BookingPage2Component} from './booking-page2/booking-page2.component'
import {BookingPage3Component} from './booking-page3/booking-page3.component'

const routes: Routes = [
  {
    path : "details-page",
    component :DetailsPageComponent
  },
  {
    path :"details-page/booking-page1",
    component :BookingPage1Component
  },
  {
    path :"details-page/booking-page2",
    component :BookingPage2Component
  },
  {
    path :"details-page/booking-page3",
    component :BookingPage3Component
  },
  {
    path : '',
    component:SignInComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
