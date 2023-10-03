import { CitiesId, LastTickets, Routes, RoutesFilters, CarriagesDetailsInfo, TrainFilters } from 'types/routes';
import { PaginatedData, RequestWithStatus } from 'utils';

export type RoutesSliceState = {
    fetchRoutes: RequestWithStatus<PaginatedData<Routes>>;
    fetchLastTickets: RequestWithStatus<LastTickets>;
    fetchCarriagesDetails: RequestWithStatus<CarriagesDetailsInfo>;
    citiesId: CitiesId;
    trainFilters: TrainFilters;
    filters: RoutesFilters;
    routesList: Routes;
    lastTicketsList: LastTickets;
    carriagesDetails: CarriagesDetailsInfo;
};
