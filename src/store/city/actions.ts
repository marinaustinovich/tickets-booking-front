import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCities } from 'api/city';
import { citiesActions } from './slice';

export const fetchCitiesAction = createAsyncThunk<any, string>('citiesSearch/fetchCities', async (name, { rejectWithValue, getState, dispatch }) => {
    const filters = {
        name,
    };

    try {
        const result = await fetchCities(filters);
        dispatch(citiesActions.setCitiesList(result));
        
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});
