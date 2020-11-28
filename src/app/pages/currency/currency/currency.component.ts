import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyProperties } from 'src/app/interfaces/currency';
import { storage } from 'src/app/interfaces/storeStates';
import * as fromSelectors from './../../../states/currency.selectors';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  entity$: Observable<CurrencyProperties>;
  public entity:CurrencyProperties

  ngOnInit(): void 
  {
    this.entity$ = this.store.pipe(select(fromSelectors.getEntity));
    this.entity$.subscribe(e=> this.entity = e);
    
  }
  form = new FormGroup({
    fromConvert: new FormControl(1),
    toConvert: new FormControl(0),
  });
  constructor(
    private store: Store<storage>
  ) {}
}
