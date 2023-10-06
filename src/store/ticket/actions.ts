import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCarriagesDetails } from 'api';
import { ticketsActions } from './slice';
import { CarriagesDetailsInfo, CarriageFilters } from 'types';


type FetchCarriagesDetailsArgs = {
    id: string;
    filters: CarriageFilters;
  };
  
export const fetchCarriagesDetailsThunk = createAsyncThunk<CarriagesDetailsInfo, FetchCarriagesDetailsArgs>(
    'RoutesSearch/fetchCarriagesDetails',
    async ({id, filters}, { rejectWithValue, dispatch }) => {
        try {
            const result: CarriagesDetailsInfo = await fetchCarriagesDetails(id, filters);
            dispatch(ticketsActions.setCarriagesDetails(result));

            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    },
);
