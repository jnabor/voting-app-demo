import { Component, OnInit, DoCheck } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { EmailService } from "../../shared/email.service"
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit, DoCheck {
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  formValid = false;
  showForm = true;

  userEmail: string;
  userPassword: string;

  constructor(private authService: AuthService,
              private router: Router,
              private emailService: EmailService) { }

  ngOnInit() {

  }

  sendMail() {
    this.emailService.sendEmail(this.userEmail);
  }

  ngDoCheck() {
    var regex = "@gmail.com";
    // only accept @gmail.com for now
    if((this.email.valid) && (this.userEmail.length >= 14) && (this.userEmail.search(regex) != -1) &&  (this.userPassword != null)) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSignIn() {
     this.showForm = false;
    this.authService.signinUser(this.userEmail, this.userPassword)
      .then( response => {
        console.log(response);
        firebase.auth().currentUser.getToken()
              .then(
                (token : string) => this.authService.setToken(token)
              )
      })
      .catch( error => {
        console.log(error);
      });
  }
}
