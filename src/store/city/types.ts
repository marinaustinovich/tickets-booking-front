import { CitiesFilters, City } from "types/city-filters";
import { PaginatedData, RequestWithStatus } from 'utils';

export type CitiesSliceState = {
    fetchCities: RequestWithStatus<PaginatedData<City[]>>;
    filters: CitiesFilters;
    citiesList: City[],
};