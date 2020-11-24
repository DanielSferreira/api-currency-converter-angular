import  { createAction, props } from '@ngrx/store';

export const CodeMoney = createAction(
    '[Currency Button Click] CodeMoney',
    props<{str:string}>()
);