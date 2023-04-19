import { Component } from '@angular/core';

@Component({
  selector: 'app-dealer-reg',
  templateUrl: './dealer-reg.component.html',
  styleUrls: ['./dealer-reg.component.css']
})
export class DealerRegComponent {
  delreg = false;
  firstName: string='';
  lastName: string='';
  officeAddress: string='';
  docs: File | null = null;


  onSubmit() {
    this.delreg = true;
    if (!this.firstName || !this.lastName || !this.officeAddress || !this.docs) {
      alert('Please fill all fields before submitting');
      this.delreg=false;
      return;
  }
}
}