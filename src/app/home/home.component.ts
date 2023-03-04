import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listTitles = [
    {
      nameCard: 'Revenue',
      money: 500,
      color: 'green',

    },
    {
      nameCard: 'Expense',
      money: 200,
      color: 'red'
    },
    {
      nameCard: 'Card Credit',
      money: 100,
      color: 'blue'

    }
  ];

  @Input() list = [];

  constructor() { }

  ngOnInit(): void {

  }

}
