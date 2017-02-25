import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {PatientsService} from '../../services/patient.service';

import {IAdvantage} from '../../store/advantage.model'
import {IPatient} from '../../store/patients/patient.model'
import {patientstorereducer} from '../../store/patients/patient.storereducerl'

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css'],
    providers: [PatientsService]
})
export class PatientlistComponent implements OnInit {

  patients: Observable<IPatient[]>;
  selectedPatient: Observable<IPatient>;

 // patientarray : IPatient[];


  constructor(private patientsService: PatientsService,
              private store: Store<IAdvantage>) {             
            console.log("Event List Component [] - Constructor this.event=" + this.patients);
            this.patients = store.select('patientstorereducer');
            this.patients.subscribe(v => console.log("Patients" + v));
            
                console.log("Event List Component - Calling eventsService.loadEvents()");
              patientsService.loadEvents();
            this.patients = store.select('patientstorereducer');
              console.log("Event List Component - Post Load Event this.events=" + this.patients);
   }

  ngOnInit() {
  }

}
