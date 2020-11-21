import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './pages/currency/currency/currency.component';
import { ListcurrencyComponent } from './pages/listcurrency/listcurrency.component';

const routes: Routes = [
  { path: '', component: CurrencyComponent },
  { path: 'listar', component: ListcurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
