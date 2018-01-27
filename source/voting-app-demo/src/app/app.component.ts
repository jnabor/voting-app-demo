import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCXY-6uhdUblRX5D-gDcNRfRHnNvqJ5q98",
      authDomain: "evoting-a0552.firebaseapp.com"
    });
  }
}
