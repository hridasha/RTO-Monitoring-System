import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dl-license',
  templateUrl: './dl-license.component.html',
  styleUrls: ['./dl-license.component.css']
})
export class DlLicenseComponent implements OnInit {
  selectedRtoCode = '';
  selectedOptions = [];
  selectAll = false;
  

  submit(): void {
    const licenseType: HTMLInputElement | null = document.querySelector('input[name="licenseType"]:checked');
    if (!licenseType) {
      alert('Please select your license type.');
      return;
    }
    const ltype: HTMLInputElement | null = document.querySelector('input[name="lType"]:checked');
    if (!licenseType) {
      alert('Please select your ltype.');
      return;
    }

    const selectedRtoCode: string = this.selectedRtoCode;
    if (!selectedRtoCode) {
      alert('Please select an RTO office.');
      return;
    }

    console.log('License Type:', licenseType.value);
    console.log('Selected RTO Code:', selectedRtoCode);

    alert('Application submitted successfully!');
    this.router.navigate(['/upload-docs']);
  }



  refresh(): void {
    this.selectedRtoCode = '';
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}