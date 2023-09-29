import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRoutes } from 'api/routes';
import { routesActions } from './slice';
import { RoutesFilters } from 'types';
import { fetchLastTickets } from 'api/last-tickets';

export const fetchRoutesAction = createAsyncThunk<any, RoutesFilters>('RoutesSearch/fetchRoutes', async (data, { rejectWithValue, getState, dispatch }) => {
    const filters = {
        ...data,
    };

    try {
        const result = await fetchRoutes(filters);
        dispatch(routesActions.setRoutesList(result));

        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchLastTicketsAction = createAsyncThunk<any, void>(
    'RoutesSearch/fetchLastTickets',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const result = await fetchLastTickets();
            dispatch(routesActions.setLastTicketsList(result));

            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
