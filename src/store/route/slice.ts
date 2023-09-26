import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder, requestInitial } from 'utils';
import { fetchRoutesAction } from './actions';
import { RoutesSliceState } from './types';

const initialState: RoutesSliceState = {
    fetchRoutes: requestInitial(),
    filters: {
        fromCityId: null,
        toCityId: null,
        dateStart: null,
        dateEnd: null,
        dateStartArrival: null,
        dateEndArrival: null,
        haveFirstClass: false,
        haveSecondClass: false,
        haveThirdClass: false,
        haveFourthClass: false,
        haveWifi: false,
        haveAirConditioning: false,
        haveExpress: false,
        priceFrom: null,
        priceTo: null,
        startDepartureHourFrom: null,
        startDepartureHourTo: null,
        startArrivalHourFrom: null,
        startArrivalHourTo: null,
        endDepartureHourFrom: null,
        endDepartureHourTo: null,
        endArrivalHourFrom: null,
        endArrivalHourTo: null,
        limit: null,
        offset: null,
        sort: 'date',
    },
    routesList: [],
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setRoutesList: (state, action: PayloadAction<any[]>) => {
            state.routesList = action.payload;
        },
    },
    extraReducers: builder => composeBuilder(builder, [fetchRoutesAction]),
});

export const routesActions = routesSlice.actions;

export const routesReducer = routesSlice.reducer;
