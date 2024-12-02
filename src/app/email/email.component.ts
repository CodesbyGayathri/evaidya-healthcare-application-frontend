import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  toEmail = '';


  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail(this.toEmail)
      .then((response) => {
        console.log('Email sent successfully', response);
        alert('Reset link sent to your Email.')
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
      localStorage.setItem("resetpassword", this.toEmail)
  }
}

