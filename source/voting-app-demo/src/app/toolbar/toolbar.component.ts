import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public location = '' ;
  show = true;

  constructor(private authService: AuthService,
              private router: Router ) {
    this.location = router.url;
  }

  ngOnInit() {
    if(this.location == '/signin') {
      this.show = true;
    } else {
      //this.show = false;
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}
