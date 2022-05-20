import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsPageComponent} from './details-page/details-page.component'
import {SignInComponent} from './sign-in/sign-in.component'
import {BookingPage1Component} from './booking-page1/booking-page1.component'

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
    path : '',
    component:SignInComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
