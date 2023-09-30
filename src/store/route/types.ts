import { CitiesId, LastTickets, Routes, RoutesFilters } from 'types/routes';
import { PaginatedData, RequestWithStatus } from 'utils';

export type RoutesSliceState = {
    fetchRoutes: RequestWithStatus<PaginatedData<Routes>>;
    fetchLastTickets: RequestWithStatus<LastTickets>;
    citiesId: CitiesId,
    filters: RoutesFilters;
    routesList: Routes;
    lastTicketsList: LastTickets
};
