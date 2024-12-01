import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
 // Import the service

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  email = localStorage.getItem("resetpassword") // Hardcoded email value
  password: string = '';
  confirmPassword: string = '';
  resetData: any

  constructor(private auth: AuthService) {}

  onSubmit() {
    // Validate password and confirm password match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

     this.resetData = {
      email: this.email,
      password: this.password,
    };

    // Call the service to reset the password
    this.auth.resetPassword(this.resetData).subscribe(
     res => {
      alert("Your Password is reseted successfully")
     }
    );
  }
}
