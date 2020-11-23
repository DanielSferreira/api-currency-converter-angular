import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storage } from 'src/app/interfaces/storeStates';
import { CurrencyApiService } from 'src/app/services/currency-api.service';
import { decrement, increment, reset } from 'src/app/states/currency.actions';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  

  listCodes;
  stater$: Observable<string>;
  ngOnInit(): void {
    this.currency_api_svc.listCurrencyCode().subscribe(a => this.listCodes = a);
    this.stater$ = this.store.select('stater')
  }

  go = ()=>
    this.route.navigate(['/listar']);

  constructor(
    private route: Router,
    private currency_api_svc: CurrencyApiService,
    private store: Store<storage>
  ) {}
}
