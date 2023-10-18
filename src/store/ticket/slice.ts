import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder, requestInitial } from 'utils';
import { fetchCarriagesDetailsThunk } from './actions';
import { TicketsCount, TicketsSliceState } from './types';
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
    ticketsCount: {},
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
    },
    extraReducers: builder => composeBuilder(builder, [fetchCarriagesDetailsThunk]),
});

export const ticketsActions = ticketsSlice.actions;

export const ticketsReducer = ticketsSlice.reducer;
