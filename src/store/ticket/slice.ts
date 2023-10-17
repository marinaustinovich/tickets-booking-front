import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder, requestInitial } from 'utils';
import { fetchCarriagesDetailsThunk } from './actions';
import { TicketsSliceState } from './types';
import { CarriagesDetailsInfo } from 'types';

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
    },
    extraReducers: builder => composeBuilder(builder, [fetchCarriagesDetailsThunk]),
});

export const ticketsActions = ticketsSlice.actions;

export const ticketsReducer = ticketsSlice.reducer;
