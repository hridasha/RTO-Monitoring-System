import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DlLicenseComponent } from './dl-license/dl-license.component';
import { DrivingschoolComponent } from './drivingschool/drivingschool.component';
import { OnlinetestComponent } from './onlinetest/onlinetest.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { BookslotComponent } from './bookslot/bookslot.component';
import { FeesPayComponent } from './fees-pay/fees-pay.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { VehicleRegComponent } from './vehicle-reg/vehicle-reg.component';
import { FancyNoComponent } from './fancy-no/fancy-no.component';
import { NationalPermitComponent } from './national-permit/national-permit.component';
import { DealerRegComponent } from './dealer-reg/dealer-reg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrackdocComponent } from './trackdoc/trackdoc.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dl-license', component: DlLicenseComponent },
  { path: 'onlinetest', component: OnlinetestComponent },
  { path: 'drivingschool', component: DrivingschoolComponent },
  { path: 'upload-docs', component: UploadDocsComponent },
  { path: 'bookslot', component: BookslotComponent },
  { path: 'fees-payment', component: FeesPayComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'vehicle-reg', component: VehicleRegComponent },
  { path: 'fancy-no', component: FancyNoComponent },
  { path: 'national-permit', component: NationalPermitComponent },
  { path: 'dealer-reg', component: DealerRegComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'trackdoc', component: TrackdocComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
