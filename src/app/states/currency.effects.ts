import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators';
import { CurrencyList, CurrencyProperties } from '../interfaces/currency';
import { CurrencyApiService } from '../services/currency-api.service';
import * as actions from "./currency.actions";
@Injectable()
export class CurrencyEffect {

    loadCurrencyList$ = createEffect(
        () => this.actions$.pipe(
            ofType(actions.CodeMoney),
            mergeMap(   ({code:string}) => this.CurrencyApi.current({code:string})),
            catchError(e=>actions.CodeMoneyFailed),
            map((entity:any)=>actions.CodeMoneySuccess({entity}))
        )
    );

    

    constructor(
        private actions$: Actions,
        private CurrencyApi: CurrencyApiService
    ) { }
}
