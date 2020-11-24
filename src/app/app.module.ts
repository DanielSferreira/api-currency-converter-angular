import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListcurrencyComponent } from './pages/listcurrency/listcurrency.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './pages/currency/currency/currency.component';
import { MenuComponent } from './pages/currency/components/menu/menu.component';
import { CardComponent } from './pages/currency/components/card/card.component';
import { SelectCurrencyCodeComponent } from './pages/currency/components/select-currency-code/select-currency-code.component';
import {CurrencyEffect} from './states/currency.effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from './states/currency.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent, 
    ListcurrencyComponent,
    MenuComponent,
    CardComponent,
    SelectCurrencyCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CurrencyEffect]),
    StoreModule.forRoot({stater: currencyReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
