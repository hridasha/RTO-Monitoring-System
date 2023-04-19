import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private appComponent: AppComponent, private router: Router) {
    this.appComponent.showNavbar = true;
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
