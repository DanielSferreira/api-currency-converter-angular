import { createReducer, on } from '@ngrx/store';
import * as actions from './currency.actions';

const _conterReducer = createReducer(
    "",
    on(actions.CodeMoney, (state, { str }) => str)
);

export function currencyReducer(state, action) {
    return _conterReducer(state, action);
}