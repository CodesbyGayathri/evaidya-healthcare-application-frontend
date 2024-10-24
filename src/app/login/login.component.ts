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
          console.log('Login successful:', response);
          
          this.route.navigate(['/patient']);
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
