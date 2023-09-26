import { Action, combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from 'store/city';
import { routesReducer } from 'store/route';


type SearchState = {
    cities: ReturnType<typeof citiesReducer>;
    routes: ReturnType<typeof routesReducer>;
};

export const searchReducer = combineReducers<SearchState, Action>({
    cities: citiesReducer,
    routes: routesReducer
});
