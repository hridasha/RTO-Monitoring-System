import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-permit',
  templateUrl: './national-permit.component.html',
  styleUrls: ['./national-permit.component.css']
})
export class NationalPermitComponent implements OnInit {
  ci = 'https://via.placeholder.com/150';
  table: boolean = false;
  linkk: boolean = false;
  reg: boolean = false;
  paytab: boolean = false;
  regNo: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void { }

  regshow() {
    this.table = false;
    this.linkk = false;
    this.reg = true;
    this.paytab = false;
  }

  submitreg() {

    if (this.regNo == '12345' && this.password == '123') {
      this.table = false;
      this.reg = false;
      this.paytab = true;

    } else {
      alert("invalid")
      this.table = false;
      this.reg = true;
      this.paytab = false;
    }
  }

}