import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-reg',
  templateUrl: './vehicle-reg.component.html',
  styleUrls: ['./vehicle-reg.component.css']
})
export class VehicleRegComponent {
  vehreg: boolean = false;
  onSubmit() {
    const firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
    const lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
    const relation = (<HTMLInputElement>document.getElementById('relation')).value;
    const chassisNo = (<HTMLInputElement>document.getElementById('chassisNo')).value;
    const engineNo = (<HTMLInputElement>document.getElementById('engineNo')).value;
    const makerName = (<HTMLInputElement>document.getElementById('makerName')).value;
    const modelName = (<HTMLInputElement>document.getElementById('modelName')).value;
    const registrationDate = (<HTMLInputElement>document.getElementById('registrationDate')).value;
    const taxValidUpto = (<HTMLInputElement>document.getElementById('taxValidUpto')).value;
    const fuelType = (<HTMLInputElement>document.getElementById('fuelType')).value;
    const color = (<HTMLInputElement>document.getElementById('color')).value;
    
    if (firstName && lastName && relation && chassisNo && engineNo && makerName && modelName && registrationDate && fuelType && color) {
      this.vehreg=true;
      alert('Form submitted successfully!');
    } else {
      this.vehreg=false;
      alert('Please fill all fields!');
    }
  }
}  