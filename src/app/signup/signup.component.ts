import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  isWrongCred: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private authService: AuthService, private route: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const credentials = this.signupForm.value;
      this.authService.signup(credentials).subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          this._snackBar.open("Signed Up Successfully", "", { 
            duration: 2000, 
          });
          this.route.navigate(['/login']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Signup failed:', error);
          this.isWrongCred = true;
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
