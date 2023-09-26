import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder, requestInitial } from 'utils';
import { fetchCitiesAction } from './actions';
import { CitiesSliceState } from './types';

const initialState: CitiesSliceState = {
    fetchCities: requestInitial(),
    filters: {
        name: null,
    },
    citiesList: [],
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setCitiesList: (state, action: PayloadAction<any[]>) => {
            state.citiesList = action.payload;
        },
    },
    extraReducers: builder => composeBuilder(builder, [fetchCitiesAction]),
});

export const citiesActions = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
