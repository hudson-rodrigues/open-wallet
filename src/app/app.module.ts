import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { RevenueComponent } from './pages/revenue/revenue.component';
import { ExpenseComponent } from './pages/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    PagenotfoundComponent,
    HighlightDirective,
    RevenueComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
