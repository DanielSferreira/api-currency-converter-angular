import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [CurrencyComponent, MenuComponent],
  imports: [
    CommonModule,
  ]
})
export class CurrencyModule { }
