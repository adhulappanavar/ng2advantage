import { Routes } from '@angular/router'
import { Error404Component } from './error404/error404.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';


export const appRoutes : Routes = [
  { path: '404', component: Error404Component },
  { path: 'patientlist', component: PatientlistComponent},
  { path: 'medicinelist', component: MedicinelistComponent}
]