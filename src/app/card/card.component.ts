import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: any;
  @Input() subtitle = '';

  constructor(private route: Router) {

  }

  ngOnInit(): void {
  }

  onClick(rota:any) {
    switch(rota){
      case 'Expense':
        this.route.navigate(['/expense']);
        break;
      case 'Revenue':
        this.route.navigate(['/revenue']);
        break;
      case 'Card Credit':
        break;
    }
  }

}
