import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storage } from 'src/app/interfaces/storeStates';
import { CurrencyApiService } from 'src/app/services/currency-api.service';
import { CodeMoney } from 'src/app/states/currency.actions';
import * as fromCurrency from './../../../../states/currency.selectors';

@Component({
  selector: 'app-select-currency-code',
  templateUrl: './select-currency-code.component.html',
  styleUrls: ['./select-currency-code.component.css']
})
export class SelectCurrencyCodeComponent implements OnInit {

  //code$: Observable<string>;
  code$: Observable<string>;
  listCodes: string[];

  ngOnInit(): void {
    this.currency_api_svc.listCurrencyCode().subscribe(a => this.listCodes = a);
    //this.code$ = this.store.select('stater')
    this.code$ = this.store.pipe(select(fromCurrency.getCode));
  }

  changeCode(e) {
    console.log(this.code$);
    
    this.store.dispatch(CodeMoney({ str: e }));
  }

  constructor(
    private store: Store<storage>,
    private currency_api_svc: CurrencyApiService,
  ) { }
}
