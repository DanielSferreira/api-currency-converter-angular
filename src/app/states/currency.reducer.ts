import { createReducer, on } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';
import * as actions from './currency.actions';

interface StatesModel {
    str:string;
    states?:{}
  }
const initialState:StatesModel = {
    str: '',
    states: {}

}

const _conterReducer = createReducer(
    initialState,
    on(actions.CodeMoney, (state, { str }) => {
        console.log(str);
        return ({str:str})}),
    on(actions.ListLoadUpdate, (state, { str }) => ({str}))
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}