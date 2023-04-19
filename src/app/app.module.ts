import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookslotComponent } from './bookslot/bookslot.component';
import { DlLicenseComponent } from './dl-license/dl-license.component';
import { DrivingschoolComponent } from './drivingschool/drivingschool.component';
import { FeesPayComponent } from './fees-pay/fees-pay.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnlinetestComponent } from './onlinetest/onlinetest.component';
import { SignupComponent } from './signup/signup.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { FormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { VehicleRegComponent } from './vehicle-reg/vehicle-reg.component';
import { FancyNoComponent } from './fancy-no/fancy-no.component';
import { NationalPermitComponent } from './national-permit/national-permit.component';
import { DealerRegComponent } from './dealer-reg/dealer-reg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TrackdocComponent } from './trackdoc/trackdoc.component';

@NgModule({
  declarations: [
    AppComponent,
    BookslotComponent,
    DlLicenseComponent,
    DrivingschoolComponent,
    FeesPayComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    OnlinetestComponent,
    SignupComponent,
    UploadDocsComponent,
    AppointmentComponent,
    VehicleRegComponent,
    FancyNoComponent,
    NationalPermitComponent,
    DealerRegComponent,
    AboutUsComponent,
    ContactusComponent,
    TrackdocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
