import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyProperties } from 'src/app/interfaces/currency';
import { CurrencyApiService } from 'src/app/services/currency-api.service';

@Component({
  selector: 'app-listcurrency',
  templateUrl: './listcurrency.component.html',
  styleUrls: ['./listcurrency.component.css']
})
export class ListcurrencyComponent implements OnInit {

  constructor(
    private currency_api_svc: CurrencyApiService,
    private store: Store<{stater: number}>) { }

  public constant: CurrencyProperties[];
 number;
  ngOnInit(): void {
    this.number = this.store.select('stater')
    this.currency_api_svc.listCurrency().subscribe(a=> this.constant = a); 
  }

}
