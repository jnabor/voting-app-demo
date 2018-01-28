import { Injectable } from '@angular/core';
declare var emailjs: any;

@Injectable()
export class EmailService {

  sendEmail(userEmail: string){

    emailjs.init("user_MPQuNydfte2VnYsV267LY");

    console.log("Sending email to " + userEmail);

    var service_id = 'sendgrid';
    var template_id = 'template_O05ycZm7';
    var params = {
      name: 'Member',
      email_destination: userEmail,
      email_subject: 'Voting Service [Do not reply]'
    };

    console.log("email name: " + params.name);
    console.log("email to: " + params.email_destination);
    console.log("email subject: " + params.email_subject);
    emailjs.send(service_id,template_id,params)
      .then(function(){
        console.log("Email sent!")
      }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
   });
  }
}
