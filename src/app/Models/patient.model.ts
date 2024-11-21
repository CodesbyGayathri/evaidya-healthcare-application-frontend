export interface Address {
  id: number;
  aptNumber: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface Patient {
  patientId: number;
  firstName: string;
  lastName: string;
  phoneNo: string;
  email: string;
  address: Address;
  gender: string;
}

export interface UpdatePatient {
  phoneNo: string;
  email: string;
  address: Address;
  gender: string;
}

export interface PatientMedicalChart {
  patient: Patient;
  diagnosis: string;
  treatment: string;
  allergies: string;
}
