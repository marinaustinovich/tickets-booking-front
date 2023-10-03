import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRoutes, fetchLastTickets, fetchCarriagesDetails } from 'api';
import { routesActions } from './slice';
import { RoutesFilters, CarriagesDetailsInfo } from 'types';

export const fetchRoutesAction = createAsyncThunk<any, RoutesFilters>('RoutesSearch/fetchRoutes', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const result = await fetchRoutes(data);
        dispatch(routesActions.setRoutesList(result));
        dispatch(routesActions.setFilters(data));

        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchLastTicketsAction = createAsyncThunk<any, void>('RoutesSearch/fetchLastTickets', async (_, { dispatch, rejectWithValue }) => {
    try {
        const result = await fetchLastTickets();
        dispatch(routesActions.setLastTicketsList(result));

        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchCarriagesDetailsThunk  = createAsyncThunk<CarriagesDetailsInfo, string, { rejectValue: Error }>(
    'RoutesSearch/fetchCarriagesDetails',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            const result: CarriagesDetailsInfo = await fetchCarriagesDetails(id);
            dispatch(routesActions.setCarriagesDetails(result));

            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    },
);
