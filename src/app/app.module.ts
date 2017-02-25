import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientThumbnailComponent } from './patientlist/patient-thumbnail.component'
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { Error404Component } from './error404/error404.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {patientstorereducer} from '../store/patients/patient.storereducerl';
import {PatientsService} from '../services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientlistComponent,
    PatientThumbnailComponent,
    MedicinelistComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
    HttpModule,
    StoreModule.provideStore({patientstorereducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    StoreLogMonitorModule
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
