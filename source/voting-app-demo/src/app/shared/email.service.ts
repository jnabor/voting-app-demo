import { Injectable } from '@angular/core';
import * as emailjs from '../../assets/email.min'

@Injectable()
export class EmailService {


  sendEmail(){
    console.log("Sending email...");

    var service_id = 'sendgrid';
    var template_id = 'template_O05ycZm7';
    var template_params = {
      name: 'John',
      reply_email: 'john@doe.com',
      message: 'This is awesome!'
    };

    emailjs.send(service_id,template_id,template_params);
  }
}