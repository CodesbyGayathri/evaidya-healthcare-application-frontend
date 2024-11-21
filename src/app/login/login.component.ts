import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';  // Make sure the path is correct
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isWrongCred: boolean = false;
  usrname: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log(this.loginForm.value.username);
      this.authService.login(credentials).subscribe({
        next: (response) => {
          const token = response.headers.get('Authorization'); // Adjust key as needed
          if (token) {
             localStorage.setItem('jwtToken', token); // Use sessionStorage if preferred
             console.log(localStorage.getItem('jwtToken'))
                     }
          if (response.body.role == 'PATIENT'){
              this.authService.userid = response.body.patientId
              localStorage.setItem('userid', response.body.patientId);
              this.route.navigate(['/patient']);
          }
          if (response.body.role == 'ADMIN'){
            this.authService.userid = response.body.userid
            localStorage.setItem('userid', response.body.userid);
            this.route.navigate(['/admin']);
        }

        }, 
        error: (error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          this.isWrongCred = true;
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
