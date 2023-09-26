import { Routes, RoutesFilters } from 'types/routes';
import { PaginatedData, RequestWithStatus } from 'utils';

export type RoutesSliceState = {
    fetchRoutes: RequestWithStatus<PaginatedData<Routes[]>>;
    filters: RoutesFilters;
    routesList: Routes;
};
