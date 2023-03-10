import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

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
