import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ExpenseComponent } from "./pages/expense/expense.component";
import { RevenueComponent } from "./pages/revenue/revenue.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'revenue', component: RevenueComponent},
  { path: 'expense', component: ExpenseComponent},
  { path: '**', component: PagenotfoundComponent } // error 404
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
