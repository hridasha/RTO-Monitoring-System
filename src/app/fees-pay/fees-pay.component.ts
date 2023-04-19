import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fees-pay',
  templateUrl: './fees-pay.component.html',
  styleUrls: ['./fees-pay.component.css']
})
export class FeesPayComponent {

  nameOnCard = ''; 
  cardNumber = '';
  expirationDate = '';
  cvv = '';
  showSpinner: boolean = false;
  paymentConfirmed: boolean = false;
  printReceipt: boolean = false;

  @ViewChild('receiptTemplate', {static: true}) receiptTemplate!: ElementRef<HTMLTemplateElement>; 

  submit() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.paymentConfirmed = true;
    }, 3000);
    this.printReceipt = true;
  }

}