export const patientstorereducer = (patientstate: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_PATIENTS':
        console.log("PATIENT Events Reducer - ADD MEDICINES" + payload);
      return payload;
    case 'CREATE_PATIENT':
      return [...patientstate, payload];
    case 'UPDATE_MEDICINE':
      return patientstate.map(patient => {
        return patient.id === payload.id ? Object.assign({}, patient, payload) : patient;
      });
    case 'DELETE_MEDICINE':
      return patientstate.filter(medicine => {
        return medicine.id !== payload.id;
      });
    default:
      return patientstate;
  }
};