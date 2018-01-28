import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, DoCheck {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide1 = true;
  hide2 = true;
  formValid = false;

  userEmail: string;
  userPassword: string;
  userPassword2: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    var regex = "@gmail.com";
    // only accept @gmail.com for now
    if((this.email.valid) && (this.userEmail.length >= 14) && (this.userEmail.search(regex) != -1) &&  (this.userPassword != null) &&
    (this.userPassword2 != null) && (this.userPassword == this.userPassword2)) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  onSignUp() {
    this.authService.signupUser(this.userEmail, this.userPassword)
  }

}
