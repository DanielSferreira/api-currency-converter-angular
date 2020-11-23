import { createReducer, on } from '@ngrx/store';
import { storageItem } from '../interfaces/storeStates';
import * as actions from './currency.actions';

export const initialState = "";

const _conterReducer = createReducer(
    initialState,
    on(actions.CodeMoney, (state, { str }) => str)
);

const currentState = createReducer(
    {},
    on(actions.CodeMoney, (state, { str }) => str)
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}