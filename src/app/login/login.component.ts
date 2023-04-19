import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  car = 'assets/cd.gif ';
    constructor(private appComponent: AppComponent, private router: Router) {
      this.appComponent.showNavbar = false;
      this.appComponent.showFooter = false;
    }  
    navigateToSignup() {
      this.router.navigate(['/signup']);
    }
    navigateToHome() {
      this.router.navigate(['/']);
    }
}
