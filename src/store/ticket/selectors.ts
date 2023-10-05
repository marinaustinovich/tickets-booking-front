import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.tickets;


const fetchTrainFiltersDataSelector = (state: AppState) => SearchSelector(state).carriagesFilters;
export const trainFiltersSelector = createSelector([fetchTrainFiltersDataSelector], carriagesFiltersData => carriagesFiltersData ?? {});

const fetchCarriagesDetailsDataSelector = (state: AppState) => SearchSelector(state).carriagesDetails;
export const carriagesDetailsSelector = createSelector([fetchCarriagesDetailsDataSelector], carriageDetailsData => carriageDetailsData ?? []);

