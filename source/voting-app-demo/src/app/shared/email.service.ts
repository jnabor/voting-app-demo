import { Injectable } from '@angular/core';
declare var emailjs: any;

@Injectable()
export class EmailService {

  sendEmail(userEmail: string){
    console.log("Sending email to " + userEmail);

    var service_id = 'sendgrid';
    var template_id = 'template_O05ycZm7';
    var template_params = {
      name: 'Member',
      email_to: userEmail
    };

    emailjs.send(service_id,template_id,template_params);
  }
}
