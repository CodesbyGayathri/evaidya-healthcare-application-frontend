import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// Assuming you have a password service

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  userId: number;
  oldPassword: string;
  newPassword: string;

  constructor(private auth: AuthService, private router: Router) {}

  // Function to handle form submission
  onSubmit(): void {
    if (this.userId && this.oldPassword && this.newPassword) {
      const passwordUpdateData = {
        userId: this.userId,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      };

      // Call service to update password
      this.auth.updatePassword(passwordUpdateData).subscribe(res => {console.log(res)})
      alert("Your Password is Updated")
      this.router.navigate(['/login'])
    }
  }
}
