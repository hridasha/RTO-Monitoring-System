import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivingschool',
  templateUrl: './drivingschool.component.html',
  styleUrls: ['./drivingschool.component.css']
})
export class DrivingschoolComponent {

  constructor(private router: Router) {}

  submit() {
    const state = (<HTMLInputElement>document.getElementById("state")).value;
    const pincode = (<HTMLInputElement>document.getElementById("pincode")).value;
    const rto = (<HTMLInputElement>document.getElementById("rto")).value;
    const ownerFirstName = (<HTMLInputElement>document.getElementById("owner-first-name")).value;
    const ownerLastName = (<HTMLInputElement>document.getElementById("owner-last-name")).value;
    const ownerDob = (<HTMLInputElement>document.getElementById("dob")).value;
    const ownerMobileNo = (<HTMLInputElement>document.getElementById("owner-mobile")).value;
    const schoolName = (<HTMLInputElement>document.getElementById("school-name")).value;
    const cov = (<HTMLInputElement>document.getElementById("cov")).value;
    const ownerMobile = (<HTMLInputElement>document.getElementById("owner-mobile")).value;
    const facilities = (<HTMLInputElement>document.getElementById("facilities")).value;
    const vehicleRegnNo = (<HTMLInputElement>document.getElementById("vehicle-regn-no")).value;
    const dlNumber = (<HTMLInputElement>document.getElementById("dl-number")).value;

    let isError = false;

    if (
      state == "" ||
      pincode == "" ||
      rto == "" ||
      ownerFirstName == "" ||
      ownerLastName == "" ||
      ownerDob == "" ||
      ownerMobileNo == "" ||
      schoolName == "" ||
      cov == "" ||
      ownerMobile == "" ||
      facilities == "" ||
      vehicleRegnNo == "" ||
      dlNumber == ""
    ) {
      const errorParagraph = document.createElement("p");
      errorParagraph.style.color = "red";
      errorParagraph.textContent = "All fields are required.";
      isError = true;

      const form = document.getElementById("driving-school-form");
      if (form) {
        form.appendChild(errorParagraph);
      }
    }

    if (!isError) {
      const successParagraph = document.createElement("p");
      successParagraph.style.color = "green";
      successParagraph.textContent = "Form submitted successfully.";

      const form = document.getElementById("driving-school-form");
      if (form) {
        form.appendChild(successParagraph);
        this.router.navigate(['/']);
      }
    }
  }
}
