import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyProperties } from '../interfaces/currency';

export const selectDetailsState = createFeatureSelector<CurrencyProperties>('stater');

export const getEntity = createSelector(
  selectDetailsState,
  (detailsState: CurrencyProperties) => detailsState,
);
