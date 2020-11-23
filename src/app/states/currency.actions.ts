import  { createAction, props } from '@ngrx/store';

export const increment = createAction(
    '[Currency Button Click] Increment'
);
export const CodeMoney = createAction(
    '[Currency Button Click] CodeMoney',
    props<{str:string}>()
);

export const decrement = createAction(
    '[Currency Button Click] Decrement'
);

export const reset = createAction(
    '[Currency Button Click] Reset'
);