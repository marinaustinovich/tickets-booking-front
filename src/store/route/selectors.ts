import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.routes;

const fetchRoutesDataSelector = (state: AppState) => SearchSelector(state).routesList;
export const routesSelector = createSelector(
    [fetchRoutesDataSelector],
    (routesData) =>routesData ?? []
);





