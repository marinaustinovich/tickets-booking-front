import { CitiesId, LastTickets, Routes, RoutesFilters, TrainFilters } from 'types/routes';
import { PaginatedData, RequestWithStatus } from 'utils';

export type RoutesSliceState = {
    fetchRoutes: RequestWithStatus<PaginatedData<Routes>>;
    fetchLastTickets: RequestWithStatus<LastTickets>;
    citiesId: CitiesId;
    trainFilters: TrainFilters;
    filters: RoutesFilters;
    routesList: Routes;
    lastTicketsList: LastTickets;
};
