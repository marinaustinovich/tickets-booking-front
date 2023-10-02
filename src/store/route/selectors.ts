import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.routes;

const fetchCitiesIdDataSelector = (state: AppState) => SearchSelector(state).citiesId;
export const citiesIdSelector = createSelector([fetchCitiesIdDataSelector], citiesIdData => citiesIdData ?? {});

const fetchTrainFiltersDataSelector = (state: AppState) => SearchSelector(state).trainFilters;
export const trainFiltersSelector = createSelector([fetchTrainFiltersDataSelector], trainFiltersData => trainFiltersData ?? {});

const fetchSortFiltersDataSelector = (state: AppState) => SearchSelector(state).filters;
export const sortFiltersSelector = createSelector([fetchSortFiltersDataSelector], filtersData => {
    if (!filtersData) return {};

    const { limit, offset, sort } = filtersData;
    return { limit, offset, sort };
});

const fetchRoutesDataSelector = (state: AppState) => SearchSelector(state).routesList;
export const routesSelector = createSelector([fetchRoutesDataSelector], routesData => routesData ?? []);

const fetchLastTicketsDataSelector = (state: AppState) => SearchSelector(state).lastTicketsList;
export const lastTicketsSelector = createSelector([fetchLastTicketsDataSelector], latestTicketsData => latestTicketsData ?? []);
