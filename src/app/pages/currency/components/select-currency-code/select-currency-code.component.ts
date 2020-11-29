import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyProperties } from 'src/app/interfaces/currency';
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

  public listCodes: string[];
  public entity$: Observable<CurrencyProperties>
  public code: string;
  
  changeCode(str)
  {
    this.store.dispatch(CodeMoney({ code: str }));
    this.entity$.subscribe(item => this.code = item.code);
  }

  ngOnInit(): void 
  {
    this.currency_api_svc.listCurrencyCode().subscribe(a => this.listCodes = a);
    this.entity$ = this.store.pipe(select(fromCurrency.getEntity));
    this.changeCode("USD");
  }

  constructor(
    private store: Store<storage>,
    private currency_api_svc: CurrencyApiService,
  ) { }
}
