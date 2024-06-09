import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { composeBuilder, requestInitial } from 'utils';
import { fetchCarriagesDetailsThunk } from './actions';
import { TicketsCount, TicketsSliceState } from './types';
import { CarriagesDetailsInfo, PassengerDataState } from 'types';

const initialState: TicketsSliceState = {
    fetchCarriagesDetails: requestInitial(),
    carriagesDetails: [],
    carriagesFilters: {
        haveFirstClass: false,
        haveSecondClass: false,
        haveThirdClass: false,
        haveFourthClass: false,
        haveWifi: false,
        haveAirConditioning: false,
        haveExpress: false,
    },
    selectedSeats: [],
    ticketsCount: {},
    passengers: [],
};

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setCarriagesDetails: (state, action: PayloadAction<CarriagesDetailsInfo>) => {
            state.carriagesDetails = action.payload;
        },
        setSelectedSeats: (state, action: PayloadAction<number[]>) => {
            state.selectedSeats = action.payload;
        },
        setTicketsCount: (state, action: PayloadAction<TicketsCount>) => {
            state.ticketsCount = action.payload;
        },
        setPassengersDate: (state, action: PayloadAction<PassengerDataState>) => {
            const key = Object.keys(action.payload)[0];
            console.log(state.passengers, key);

            const existingIndex = state.passengers.findIndex(passenger => passenger.hasOwnProperty(key));
            if (existingIndex !== -1) {
                state.passengers[existingIndex] = action.payload;
            } else {
                state.passengers = [...state.passengers, action.payload];
            }
        },
    },
    extraReducers: builder => composeBuilder(builder, [fetchCarriagesDetailsThunk]),
});

export const ticketsActions = ticketsSlice.actions;

export const ticketsReducer = ticketsSlice.reducer;
