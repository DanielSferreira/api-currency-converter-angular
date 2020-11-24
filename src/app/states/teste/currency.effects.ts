import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators';
import { CurrencyProperties } from '../../interfaces/currency';
import { CurrencyApiService } from '../../services/currency-api.service';

@Injectable()
export class BookmarksEffects {

  toggleBookmarksById$ = createEffect(() => this.actions$
    .pipe(
        
    ))

  constructor(private actions$: Actions,
              private store: Store<CurrencyProperties>,
              private weatherService: CurrencyApiService) {
  }
}
