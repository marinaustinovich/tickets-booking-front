import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRoutes, fetchLastTickets } from 'api';
import { routesActions } from './slice';
import { RoutesFilters } from 'types';

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