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
      source: '/assets/paper_money_96px.png'

    },
    {
      nameCard: 'Expense',
      money: 200,
      color: 'red',
      source: '/assets/request_money_96px.png'
    },
    {
      nameCard: 'Card Credit',
      money: 100,
      color: 'blue',
      source: '/assets/mastercard_credit_card_96px.png'
    }
  ];

  @Input() list = [];

  constructor() { }

  ngOnInit(): void {
  }

  btnAdicionar() {
    console.log("btn adicionar");
  }

}
