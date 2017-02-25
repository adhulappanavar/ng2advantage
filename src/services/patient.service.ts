import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {IAdvantage} from '../store/advantage.model';
import {IPatient} from '../store/patients/patient.model';

const BASE_URL = 'http://localhost:3051/patients';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PatientsService {
  events: Observable<Array<IPatient>>;

  constructor(private http: Http, private store: Store<IAdvantage>) {
    this.events = store.select('patientstorereducer');
  }

  loadEvents() {
    this.http.get(BASE_URL)
      .do( res => console.log('HTTP response:', res))
      .map(res => res.json())
      .do(console.log)
      .map(payload => ({ type: 'ADD_PATIENTS', payload }))
      .do(console.log)
      .subscribe(action => this.store.dispatch(action));
  }

  saveEvent(event: IPatient) {
    (event.id) ? this.updateEvent(event) : this.createEvent(event);
  }

  createEvent(event: IPatient) {
    this.http.post(`${BASE_URL}`, JSON.stringify(event), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_PATIENT', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateEvent(patient: IPatient) {
    this.http.put(`${BASE_URL}${patient.id}`, JSON.stringify(event), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_PATINET', payload: event }));
  }

  deleteEvent(patient: IPatient) {
    this.http.delete(`${BASE_URL}${patient.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_PATIENT', payload: event }));
  }
}
