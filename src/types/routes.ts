import { ResultsPerPageEnum, SortByEnum } from 'enums';
import { City } from './city-filters';

export type BaseFilters = Partial<{
    dateStart: string | null;
    dateEnd: string | null;
    dateStartArrival: string | null;
    dateEndArrival: string | null;
    haveFirstClass: boolean;
    haveSecondClass: boolean;
    haveThirdClass: boolean;
    haveFourthClass: boolean;
    haveWifi: boolean;
    haveAirConditioning: boolean;
    haveExpress: boolean;
    priceFrom: number | null;
    priceTo: number | null;
    startDepartureHourFrom: number | null;
    startDepartureHourTo: number | null;
    startArrivalHourFrom: number | null;
    startArrivalHourTo: number | null;
    endDepartureHourFrom: number | null;
    endDepartureHourTo: number | null;
    endArrivalHourFrom: number | null;
    endArrivalHourTo: number | null;
}>;

export type CitiesId = {
    fromCityId: string | null;
    toCityId: string | null;
};

export type TrainFilters = CitiesId & BaseFilters;

export type RoutesFilters = BaseFilters &
    Partial<{
        fromCityId: string | null;
        toCityId: string | null;
        limit: ResultsPerPageEnum;
        offset: number | null;
        sort: SortByEnum;
    }>;

export type Routes = {
    total_count: number;
    items: TrainInfo[] | [];
};

export type LastTickets = TrainInfo[] | [];

export type BasicInfo = {
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;
};

export type TrainInfo = BasicInfo & {
    is_express: boolean;
    min_price: number;
    available_seats: number;
    available_seats_info: SeatsInfo;
    departure: DepartureInfo;
    arrival?: DepartureInfo;
};

export type SeatsInfo = Partial<{
    first: number;
    second: number;
    third: number;
    fourth: number;
}>;

export type PriceInfo = {
    top_price: number;
    bottom_price: number;
    side_price?: number;
};

export type Train = {
    _id: string;
    name: string;
};

export type DepartureInfo = BasicInfo & {
    _id: string;
    is_express: boolean;
    min_price: number;
    duration: number;
    available_seats: number;
    available_seats_info: SeatsInfo;
    train: Train;
    from: DepartureOrArrivalInfo;
    to: DepartureOrArrivalInfo;
    price_info: Record<string, PriceInfo>;
};

export type DepartureOrArrivalInfo = {
    datetime: number;
    railway_station_name: string;
    city: City;
};
