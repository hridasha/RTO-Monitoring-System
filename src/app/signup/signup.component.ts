import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private appComponent: AppComponent, private router: Router) {
    this.appComponent.showNavbar = false;
    this.appComponent.showFooter = false;
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
