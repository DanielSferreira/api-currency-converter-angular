import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';


export const selectDetailsState = createFeatureSelector<any>('stater');

export const getCode = createSelector(
  selectDetailsState,
  (detailsState: string) => detailsState,
);

export const getName = createSelector(
  selectDetailsState,
  (detailsState: CurrencyProperties) => detailsState.name,
);

export const all = createSelector(
  selectDetailsState,
  (detailsState: CurrencyProperties) => detailsState
);
