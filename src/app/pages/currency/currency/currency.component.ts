import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyApiService } from 'src/app/services/currency-api.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(
    private route: Router,
    private currency_api_svc: CurrencyApiService
  ) { }

  listCodes;
  ngOnInit(): void {
    this.currency_api_svc.listCurrencyCode().subscribe(a => this.listCodes = a);
  }
  go():void
  {
    this.route.navigate(['/listar']);
  }

}
