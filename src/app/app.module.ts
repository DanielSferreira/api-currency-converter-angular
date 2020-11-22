import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcurrencyComponent } from './pages/listcurrency/listcurrency.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './pages/currency/currency/currency.component';
import { MenuComponent } from './pages/currency/components/menu/menu.component';
import { CardComponent } from './pages/currency/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent, 
    MenuComponent,
    ListcurrencyComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
