import  { createAction, props } from '@ngrx/store';

export const CodeMoney = createAction(
    '[Currency Button Click] CodeMoney',
    props<{code:string}>()
);
export const CodeMoneySuccess = createAction(
    '[Currency Button Click] CodeMoney Success',
    props<{entity:any}>()
);
export const CodeMoneyFailed = createAction(
    '[Currency Button Click] CodeMoney Falied',
    //props<{code:string}>()
);
export const ListLoadUpdate = createAction(
    '[Currency Load] load button',
    props<{code:string}>()
);