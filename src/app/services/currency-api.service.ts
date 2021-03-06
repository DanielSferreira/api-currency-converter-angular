import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { CurrencyList } from './../interfaces/currency'

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  constructor(protected http: HttpClient) {}

  private GetCurrency(): Observable<CurrencyList> {
    return this.http.get<CurrencyList>("https://economia.awesomeapi.com.br/json/all");
  }

  public listCurrencyCode(): Observable<string[]> {
    return this.GetCurrency().pipe(map((a: CurrencyList) => Object.keys(a)))
  }

  public listCurrency(): Observable<any[]> {
    return this.GetCurrency().pipe(map((a: CurrencyList) => { return Object.keys(a).map(key => a[key]) }));
  }

  public Currencys(): Observable<CurrencyList> {
    return this.GetCurrency().pipe(map((a: CurrencyList) => { console.log(a); return a }));
  }

  public current({ code }: { code: string }) {  
    return this.GetCurrency().pipe(map((a) => a[code]));
  }
}