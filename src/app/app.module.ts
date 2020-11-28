import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { currencyReducer } from './states/currency.reducer';
import { CurrencyEffect } from './states/currency.effects'

import { AppComponent } from './app.component';
import { ListcurrencyComponent } from './pages/listcurrency/listcurrency.component';
import { CurrencyComponent } from './pages/currency/currency/currency.component';
import { CardComponent } from './pages/currency/components/card/card.component';
import { SelectCurrencyCodeComponent } from './pages/currency/components/select-currency-code/select-currency-code.component';
import { LabelComponent } from './pages/currency/components/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    ListcurrencyComponent,
    CardComponent,
    SelectCurrencyCodeComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([CurrencyEffect]),
    StoreModule.forRoot({ stater: currencyReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
