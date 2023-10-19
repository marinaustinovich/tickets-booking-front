import { CarriageFilters, CarriagesDetailsInfo, PassengerFormState, PersonInfo } from 'types';
import { RequestWithStatus } from 'utils';

export type TicketsSliceState = {
    fetchCarriagesDetails: RequestWithStatus<CarriagesDetailsInfo>;
    carriagesDetails: CarriagesDetailsInfo;
    carriagesFilters: CarriageFilters;
    selectedSeats: number[];
    ticketsCount: TicketsCount;
    passengers: PersonInfo[];
    passengersFormState: PassengerFormState;
};

export type TicketsCount = Partial<{
    adult: string;
    child: string;
    includeChildren: string;
}>;
