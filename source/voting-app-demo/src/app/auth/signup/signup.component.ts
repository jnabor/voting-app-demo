import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide1 = true;
  hide2 = true;
  formValid = false;

  userEmail: string;
  userPassword: string;
  userPassword2: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp() {
    this.authService.signupUser(this.userEmail, this.userPassword)
  }

}
