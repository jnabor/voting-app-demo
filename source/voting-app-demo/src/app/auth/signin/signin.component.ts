import { Component, OnInit, DoCheck } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

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

  userEmail: string;
  userPassword: string;

  constructor(private authService: AuthService) { }

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
    this.showForm = false;
    this.authService.signinUser(this.userEmail, this.userPassword)
      .then( response => {
        console.log(response);
        this.showSuccess = true;
      })
      .catch( error => {
        console.log(error);
        this.showFailure = true;
      });
  }
}
