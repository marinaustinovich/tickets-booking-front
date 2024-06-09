import { AppState } from 'store';
import { createSelector } from 'reselect';
import { PassengerDataState } from 'types';

const SearchSelector = (state: AppState) => state.search.tickets;

const fetchCarriagesDetailsDataSelector = (state: AppState) => SearchSelector(state).carriagesDetails;
export const carriagesDetailsSelector = createSelector([fetchCarriagesDetailsDataSelector], carriageDetailsData => carriageDetailsData ?? []);

const fetchCarriagesFiltersDataSelector = (state: AppState) => SearchSelector(state).carriagesFilters;
export const carriagesFiltersSelector = createSelector([fetchCarriagesFiltersDataSelector], carriageFiltersData => carriageFiltersData ?? {});

export const carriageDetailByIndexSelector = createSelector(
    [fetchCarriagesDetailsDataSelector, (state: AppState, index: number) => index],
    (carriageDetailsData, index) => (carriageDetailsData ? carriageDetailsData[index] : null),
);

export const selectedCarriageSelector = (index: number) => {
    return createSelector([carriagesDetailsSelector], carriages => carriages[index]);
};

const fetchSelectedSeatsDataSelector = (state: AppState) => SearchSelector(state).selectedSeats;
export const selectedSeatsSelector = createSelector([fetchSelectedSeatsDataSelector], seatsData => seatsData ?? []);

const fetchTicketsCountDataSelector = (state: AppState) => SearchSelector(state).ticketsCount;
export const ticketsCountSelector = createSelector([fetchTicketsCountDataSelector], ticketsCountData => ticketsCountData ?? {});

// const fetchPassengersDataSelector = (state: AppState) => SearchSelector(state).passengers;
// export const passengersDataSelector = createSelector([fetchPassengersDataSelector], passengersData => passengersData ?? []);
const fetchPassengersDataSelector = (state: AppState) => {
    const result = SearchSelector(state).passengers;
    const a = SearchSelector(state);
    console.log('fetchPassengersFormSelector result:', a, result);
    return result;
};

export const passengersDataSelector = (key: string) => {
    return createSelector([fetchPassengersDataSelector], (passengers: PassengerDataState[]) => {
        const passengerData = passengers.find(passenger => passenger.key === key);
        
        return passengerData || {};
    });
};
