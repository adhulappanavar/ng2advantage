import {IPatient} from "./patients/patient.model";
import {IMedicine} from "./medicines/medicine.model";

export interface IAdvantage{
  patients : IPatient[];
  medicines : IMedicine;

  selectedPatient : IPatient;
  selectedMedicine : IMedicine;
}