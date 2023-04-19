import { Component } from '@angular/core';

@Component({
  selector: 'app-onlinetest',
  templateUrl: './onlinetest.component.html',
  styleUrls: ['./onlinetest.component.css']
})
export class OnlinetestComponent {

  signincon: boolean = false;
  appNumber='';
  dob='';
  password='';
  score: number = 0; 

  submit() {
    if (this.appNumber === '12345' && this.password === '123') {
      this.signincon = true;
    } else {
      alert('Invalid credentials. Please try again.');
      this.signincon = false;
    }
  }

  submitExam() {
    const answer1 = (document.querySelector('input[name="rto1"]:checked') as HTMLInputElement)?.value;
    const answer2 = (document.querySelector('input[name="rto2"]:checked') as HTMLInputElement)?.value;
    const answer3 = (document.querySelector('input[name="rto3"]:checked') as HTMLInputElement)?.value;
  
    if (!answer1 || !answer2 || !answer3) {
      this.score = 0;
      alert("Please answer all questions before submitting.");
      return;
    }
    let score = 0;
    if (answer1 === "a") {
      score += 1;
    }
    if (answer2 === "b") {
      score += 1;
    }
    if (answer3 === "a") {
      score += 1;
    }
    
    this.score = score;
  }
}
