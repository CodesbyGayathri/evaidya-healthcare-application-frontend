import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private userID = '8PRMJTBZtuecSAQbZ'; 
  private serviceID = 'service_jy9wmvd'; // Your EmailJS Service ID
  private templateID = 'template_zqa2res'; // Your EmailJS Template ID

  constructor() {}

  sendEmail(toEmail: string): Promise<any> {
    const templateParams = {
      to_email: toEmail,
      subject: "",
      message: "",
    };

    return emailjs.send(this.serviceID, this.templateID, templateParams, this.userID);
  }
}
