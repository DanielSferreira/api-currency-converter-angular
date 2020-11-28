import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyProperties } from 'src/app/interfaces/currency';
import { storage } from 'src/app/interfaces/storeStates';
import * as fromSelectors from './../../../../states/currency.selectors';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  entity$: Observable<CurrencyProperties>;
  public entity:CurrencyProperties

  ngOnInit(): void 
  {
    this.entity$ = this.store.pipe(select(fromSelectors.getEntity));
    this.entity$.subscribe(e=> this.entity = e)
  }

  constructor(
    private store: Store<storage>
  ) {}

}
