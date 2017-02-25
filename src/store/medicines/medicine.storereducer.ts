export const medicinestorereducer = (medicinestate: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_MEDICINES':
        console.log("MEDICINE Events Reducer - ADD MEDICINES" + payload);
      return payload;
    case 'CREATE_MEDICINE':
      return [...medicinestate, payload];
    case 'UPDATE_MEDICINE':
      return medicinestate.map(medicine => {
        return medicine.id === payload.id ? Object.assign({}, medicine, payload) : medicine;
      });
    case 'DELETE_MEDICINE':
      return medicinestate.filter(medicine => {
        return medicine.id !== payload.id;
      });
    default:
      return medicinestate;
  }
};