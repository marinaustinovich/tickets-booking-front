import { Action, combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from 'store/city';
import { routesReducer } from 'store/route';
import { ticketsReducer } from 'store/ticket';


type SearchState = {
    cities: ReturnType<typeof citiesReducer>;
    routes: ReturnType<typeof routesReducer>;
    tickets: ReturnType<typeof ticketsReducer>;
};

export const searchReducer = combineReducers<SearchState, Action>({
    cities: citiesReducer,
    routes: routesReducer,
    tickets: ticketsReducer
});
