import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private appComponent: AppComponent, private router: Router) {
    this.appComponent.showNavbar = true;
    this.appComponent.showFooter = true;
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
