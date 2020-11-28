import { createReducer, on } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';
import * as actions from './currency.actions';

interface StatesModel {
    code?:string;
    entity?:any;
}

const initialState:StatesModel = {
    code: '',
    entity:{},
}

const _conterReducer = createReducer(
    initialState,
    on(actions.CodeMoneySuccess, (state, {entity}:{ entity:CurrencyProperties }) => entity)
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}