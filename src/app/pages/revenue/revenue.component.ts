import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  public data =
    {
      description: '',
      value: 0,
      date: ''
    };
  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.data);
  }

}
