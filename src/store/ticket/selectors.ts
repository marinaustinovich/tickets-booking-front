import { AppState } from 'store';
import { createSelector } from 'reselect';

const SearchSelector = (state: AppState) => state.search.tickets;


const fetchTrainFiltersDataSelector = (state: AppState) => SearchSelector(state).carriagesFilters;
export const trainFiltersSelector = createSelector([fetchTrainFiltersDataSelector], carriagesFiltersData => carriagesFiltersData ?? {});

const fetchCarriagesDetailsDataSelector = (state: AppState) => SearchSelector(state).carriagesDetails;
export const carriagesDetailsSelector = createSelector([fetchCarriagesDetailsDataSelector], carriageDetailsData => carriageDetailsData ?? []);

export const carriageDetailByIndexSelector = createSelector(
    [fetchCarriagesDetailsDataSelector, (state: AppState, index: number) => index],
    (carriageDetailsData, index) => carriageDetailsData ? carriageDetailsData[index] : null
);

export const selectedCarriageSelector = (index: number) => {
    return createSelector([carriagesDetailsSelector], carriages => carriages[index]);
};

const fetchSelectedSeatsDataSelector = (state: AppState) => SearchSelector(state).selectedSeats;
export const selectedSeatsSelector = createSelector([fetchSelectedSeatsDataSelector], seatsData => seatsData ?? []);
