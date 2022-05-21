import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { BookingPage1Component } from './booking-page1/booking-page1.component';
import { BookingPage2Component } from './booking-page2/booking-page2.component';
import { BookingPage3Component } from './booking-page3/booking-page3.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    SignInComponent,
    BookingPage1Component,
    BookingPage2Component,
    BookingPage3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
