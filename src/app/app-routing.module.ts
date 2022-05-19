import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsPageComponent} from './details-page/details-page.component'
import {SignInComponent} from './sign-in/sign-in.component'

const routes: Routes = [
  {
    path : "details-page",
    component :DetailsPageComponent
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
