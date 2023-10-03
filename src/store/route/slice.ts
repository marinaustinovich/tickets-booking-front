import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder, requestInitial } from 'utils';
import { fetchRoutesAction } from './actions';
import { RoutesSliceState } from './types';
import { CitiesId, LastTickets, Routes, RoutesFilters, CarriagesDetailsInfo, TrainFilters } from 'types';
import { ResultsPerPageEnum, SortByEnum } from 'enums';

const initialState: RoutesSliceState = {
    fetchRoutes: requestInitial(),
    fetchLastTickets: requestInitial(),
    fetchCarriagesDetails: requestInitial(),
    citiesId: {
        fromCityId: null,
        toCityId: null,
    },
    trainFilters: {
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
    },
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
        limit: ResultsPerPageEnum.FIVE,
        offset: null,
        sort: SortByEnum.DATE,
    },
    routesList: {
        total_count: 0,
        items: [],
    },
    lastTicketsList: [],
    carriagesDetails: [],
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setCitiesId: (state, action: PayloadAction<CitiesId>) => {
            state.citiesId = action.payload;
        },
        setFilters: (state, action: PayloadAction<RoutesFilters>) => {
            state.filters = action.payload;
        },
        setTrainFilters: (state, action: PayloadAction<TrainFilters>) => {
            state.trainFilters = action.payload;
        },
        setRoutesList: (state, action: PayloadAction<Routes>) => {
            state.routesList = action.payload;
        },
        setLastTicketsList: (state, action: PayloadAction<LastTickets>) => {
            state.lastTicketsList = action.payload;
        },
        setCarriagesDetails: (state, action: PayloadAction<CarriagesDetailsInfo>) => {
            state.carriagesDetails = action.payload;
        },
    },
    extraReducers: builder => composeBuilder(builder, [fetchRoutesAction]),
});

export const routesActions = routesSlice.actions;

export const routesReducer = routesSlice.reducer;
