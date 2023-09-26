import { City } from './city-filters';

export type RoutesFilters = Partial<{
    fromCityId: string | null;
    toCityId: string | null;
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
    limit: number | null;
    offset: number | null;
    sort: 'date' | 'price' | 'duration';
}>;

export type TrainInfo = {
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;
    is_express: boolean;
    min_price: number;
    train: string;
    from: DepartureOrArrivalInfo;
    to: DepartureOrArrivalInfo;
    duration: number;
    price_info: Record<string, number>;
    seats_info: Record<string, number>;
};

export type DepartureOrArrivalInfo = {
    datetime: number;
    railway_station_name: string;
    city: City;
};

export type Route = Partial<{
    total_count: number;
    items: [];
}>;
