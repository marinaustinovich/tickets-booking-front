import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.cities;

const fetchCitiesDataSelector = (state: AppState) => SearchSelector(state).citiesList;
export const citiesSelector = createSelector(
    [fetchCitiesDataSelector],
    (citiesData) => citiesData ?? []
);





