import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';
interface StatesModel {
  str:string;
  states?:{}
}
export const selectDetailsState = createFeatureSelector<StatesModel | any>('stater');

export const getCode = createSelector(
  selectDetailsState,
  (detailsState: StatesModel) => {
    console.log(detailsState);
    return({str:detailsState.str})
  },
);

export const getName = createSelector(
  selectDetailsState,
  (detailsState: CurrencyProperties) => detailsState.name,
);

export const all = createSelector(
  selectDetailsState,
  (detailsState: CurrencyProperties) => detailsState
);
