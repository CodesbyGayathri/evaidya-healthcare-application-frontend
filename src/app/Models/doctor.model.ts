export interface Address {
    id: number | null; // ID can be null
    aptNumber: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
  }
  
  export interface Doctor {
    doctorId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    specialization: string;
    yearsOfExperience: number;
    address: Address; // Nested address object
  }