import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctorForm: FormGroup;
  constructor(private fb: FormBuilder, private admin: AdminService){
    this.doctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialization: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(1)]],
      address: this.fb.group({
        aptNumber: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    });
  }

  onSubmit(): void {
    if (this.doctorForm.valid) {
      const formData = this.doctorForm.value;
      console.log('Submitting form data:', formData);

      this.admin.AddDoctor(formData).subscribe(
        response => {
          console.log('Doctor created successfully:', response);
          alert('Doctor created successfully!');
        },
        error => {
          console.error('Error creating doctor:', error);
          alert('Error creating doctor. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please fill out the form correctly before submitting.');
    }
  }

}
