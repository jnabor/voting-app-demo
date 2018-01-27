import { Component, OnInit, DoCheck } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  showProgress = false;
  showSuccess = false;
  showFailure = false;
  showemailProgress = false;
  showfinishEmail = false;

  userEmail: string;
  userPassword: string;
  linktoUrl: string;
  endpoint = 'https://us-central1-evoting-a0552.cloudfunctions.net/httpEmail';

  constructor(private authService: AuthService, private http: Http) { }

  sendEmail() {
    const data = {
      toEmail: 'sonabstudios@gmail.com',
      toName: 'Jayson Nabor'
    }

    this.http.post(this.endpoint, data).subscribe();


  }

  ngOnInit() {
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
    this.showProgress = true;
    this.showForm = false;
    this.authService.signinUser(this.userEmail, this.userPassword)
      .then( response => {
        console.log(response);
        this.showSuccess = true;
        this.showProgress = false;
        this.showemailProgress = true;
        this.sendEmail();
        setTimeout(() => {
          this.showemailProgress = false;
          this.showfinishEmail = true;
         }, 1000);
      })
      .catch( error => {
        console.log(error);
        this.showFailure = true;
        this.showProgress = false;
      });
  }
}
