import { CarriageFilters, CarriagesDetailsInfo } from 'types';
import { RequestWithStatus } from 'utils';

export type TicketsSliceState = {
    fetchCarriagesDetails: RequestWithStatus<CarriagesDetailsInfo>;
    carriagesDetails: CarriagesDetailsInfo;
    carriagesFilters: CarriageFilters;
};
