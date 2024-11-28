export interface NewAddress {
    aptNumber: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
  }
  
  export interface NewDoctor {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    specialization: string;
    yearsOfExperience: number;
    address: NewAddress; // Nested address object
  }