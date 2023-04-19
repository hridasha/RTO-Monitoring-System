import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent {
  constructor(private router: Router) { }
  submit() {
    const timeSlot: HTMLInputElement | null = document.querySelector('input[name="timeSlot"]:checked');
  if (timeSlot) {
    alert("BOOKED")
    this.router.navigate(['/fees-payment']);
  } else {
    alert('Please select a time slot.');
  }
}
}
