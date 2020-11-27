import { createReducer, on } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';
import * as actions from './currency.actions';

interface StatesModel {
    code?:string;
    entity?:any;
    states?:{}
  }
const initialState:StatesModel = {
    code: '',
    entity:{},
    states: {}

}

const _conterReducer = createReducer(
    initialState,
    on(actions.CodeMoney, (state, { code }) => {
        return ({code})}),
    on(actions.ListLoadUpdate, (state, { code }) => ({code})),
    on(actions.CodeMoneySuccess, (state, { entity }) => ({entity}))
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}