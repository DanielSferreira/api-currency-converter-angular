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

  private entity$: Observable<CurrencyProperties>;
  public entity: CurrencyProperties;
  
  public form = new FormGroup({
    fromConvert: new FormControl(1),
    toConvert: new FormControl({ value: 0 }),
  });

  ngOnInit()
  {
    this.entity$ = this.store.pipe(select(fromSelectors.getEntity));
    this.entity$.subscribe(e => this.entity = e);
  }

  convert(inputName:string)
  {
    let base = this.form.controls[inputName].value;
    let toBrl = Number(this.entity.ask);

    let result = 1 >= toBrl ?
      Math.abs(1 / toBrl) * base
      :
      base / toBrl;

    this.form.controls["toConvert"].setValue(result.toFixed(2));
  }

  constructor(
    private store: Store<storage>
  ) { }
}
