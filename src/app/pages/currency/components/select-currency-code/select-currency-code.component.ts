import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storage } from 'src/app/interfaces/storeStates';
import { CurrencyApiService } from 'src/app/services/currency-api.service';
import { CodeMoney } from 'src/app/states/currency.actions';
import * as fromCurrency from './../../../../states/currency.selectors';

interface StatesModel {
  str:string;
  states?:{}
}

@Component({
  selector: 'app-select-currency-code',
  templateUrl: './select-currency-code.component.html',
  styleUrls: ['./select-currency-code.component.css']
})
export class SelectCurrencyCodeComponent implements OnInit {

  code$: Observable<StatesModel >;
  listCodes: string[];

  ngOnInit(): void {
    this.currency_api_svc.listCurrencyCode().subscribe(a => this.listCodes = a);
    this.code$ = this.store.pipe(select(fromCurrency.getCode));
  }

  changeCode(e) {
    this.code$.subscribe(e=>console.log(e))
    this.store.dispatch(CodeMoney({ str: e.str }));
  }

  constructor(
    private store: Store<storage>,
    private currency_api_svc: CurrencyApiService,
  ) { }
}
