import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.routes;

const fetchCitiesIdDataSelector = (state: AppState) => SearchSelector(state).citiesId;
export const citiesIdSelector = createSelector([fetchCitiesIdDataSelector], citiesIdData => citiesIdData ?? {});

const fetchFiltersDataSelector = (state: AppState) => SearchSelector(state).filters;
export const filtersSelector = createSelector([fetchFiltersDataSelector], filtersData => filtersData ?? {});

const fetchRoutesDataSelector = (state: AppState) => SearchSelector(state).routesList;
export const routesSelector = createSelector([fetchRoutesDataSelector], routesData => routesData ?? []);

const fetchLastTicketsDataSelector = (state: AppState) => SearchSelector(state).lastTicketsList;
export const lastTicketsSelector = createSelector([fetchLastTicketsDataSelector], latestTicketsData => latestTicketsData ?? []);
