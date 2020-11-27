import { createReducer, on } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';
import * as actions from './currency.actions';

interface StatesModel {
    code:string;
    states?:{}
  }
const initialState:StatesModel = {
    code: '',
    states: {}

}

const _conterReducer = createReducer(
    initialState,
    on(actions.CodeMoney, (state, { code }) => {
        return ({code})}),
    on(actions.ListLoadUpdate, (state, { code }) => ({code}))
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}