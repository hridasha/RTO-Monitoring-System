import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fancy-no',
  templateUrl: './fancy-no.component.html',
  styleUrls: ['./fancy-no.component.css']
})
export class FancyNoComponent {
  vehicleType: string = '';
  make: string = '';
  model: string = '';
  year: number = 0;
  isFancyNumber: boolean = false;
  fanreg: boolean = false;
  registrationNumber: string = '';
  constructor(private location: Location) { }


  onSubmit() {
    const firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
    const lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
    const makerName = (<HTMLInputElement>document.getElementById('makerName')).value;
    const modelName = (<HTMLInputElement>document.getElementById('modelName')).value;
    const registrationDate = (<HTMLInputElement>document.getElementById('registrationDate')).value;
    const hasFancyNumber: HTMLInputElement | null = document.querySelector('input[name="hasFancyNumber"]:checked');
  
    let fancyNumber = '';
    if (this.isFancyNumber) {
      fancyNumber = (<HTMLInputElement>document.getElementById('fancyNumber')).value;
    }
  
    if ( firstName && lastName  && makerName && modelName && registrationDate && hasFancyNumber) {
      alert('Success: All entries are filled');
      this.fanreg = true;
    } else {
      alert('Error: Please fill all entries');
    }
  }
  
  back() {
      this.location.back();
    }

    onFancyNumberChange(event: Event) {
      this.isFancyNumber = (event.target as HTMLInputElement).value === 'yes';

    }

  }
