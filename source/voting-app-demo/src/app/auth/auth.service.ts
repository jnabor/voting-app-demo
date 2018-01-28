import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {

  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error=> console.log(error)
    )
  }

  signinUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( response => {
        this.router.navigate['/'];
        console.log(response);
        console.log("authentication success");
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
