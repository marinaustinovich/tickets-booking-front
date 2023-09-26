import { Route, RoutesFilters } from 'types/routes';
import { PaginatedData, RequestWithStatus } from 'utils';

export type RoutesSliceState = {
    fetchRoutes: RequestWithStatus<PaginatedData<Route[]>>;
    filters: RoutesFilters;
    routesList: Route[],
};