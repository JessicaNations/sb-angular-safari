import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarsComponent } from './calendars/calendars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component';
import { VisitNavbarComponent } from './visit-navbar/visit-navbar.component';
import { FaqComponent } from './faq/faq.component';
import { ParkPoliciesComponent } from './park-policies/park-policies.component';
import { HoursComponent } from './hours/hours.component';
import { HistoryComponent } from './history/history.component';
import { HiringComponent } from './hiring/hiring.component';
import { AnimalservicesComponent } from './animal-services/animal-services.component';
import { AboutNavbarComponent } from './about-navbar/about-navbar.component';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { CalendarBottomComponent } from './calendar-bottom/calendar-bottom.component';
import { AdmissionNavbarComponent } from './admission-navbar/admission-navbar.component';
import { GeneralAdmissionComponent } from './general-admission/general-admission.component';
import { GroupRatesComponent } from './group-rates/group-rates.component';
import { FieldTripsComponent } from './field-trips/field-trips.component';
import { JobAppComponent } from './job-app/job-app.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { AppMaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    NgImageSliderModule
  ],
  declarations: [
    AppComponent,
    CalendarsComponent,
    DashboardComponent,
    VisitComponent,
    VisitNavbarComponent,
    FaqComponent,
    ParkPoliciesComponent,
    HoursComponent,
    HistoryComponent,
    AnimalservicesComponent,
    HiringComponent,
    AboutNavbarComponent,
    AboutComponent,
    AdmissionComponent,
    CalendarBottomComponent,
    AdmissionNavbarComponent,
    GeneralAdmissionComponent,
    GroupRatesComponent,
    FieldTripsComponent,
    JobAppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
