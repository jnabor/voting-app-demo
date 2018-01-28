import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from "../../app/shared/email.service";

@Injectable()
export class AuthService {
  token: string;
  userEmail: string;

  constructor(private router: Router, private emailService: EmailService) {

  }

  sendMail() {
    console.log("Sending email from auth service...");
    this.emailService.sendEmail(this.userEmail);
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error=> console.log(error)
    )
  }

  signinUser(email: string, password: string) {
      this.userEmail = email;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( response => {
        this.router.navigate['/'];
        console.log(response);
        console.log("authentication success");
        this.sendMail();
        firebase.auth().currentUser.getIdToken()
              .then(
                (token : string) => this.token = token
              );
      })
      .catch( error => {
        console.log(error);
        console.log("authentication failure");
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token : string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated(): boolean {
    return (this.token != null);
  }

  logout(){
    firebase.auth().signOut()
    .then( response => {
      this.router.navigate['/'];
      console.log("signed out");
    })
    this.token = null;
  }
}
