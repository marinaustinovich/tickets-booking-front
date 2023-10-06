import { CarriageTypesEnum } from 'enums';
import { BasicInfo } from './routes';

export type AvailableSeatInfo = {
    index: number;
    available: boolean;
};

export type CoachInfo = BasicInfo & {
    _id: string;
    name: string;
    class_type: CarriageTypesEnum;
    price: number;
    top_price: number;
    bottom_price: number;
    side_price: number;
    linens_price: number;
    wifi_price: number;
    is_linens_included: boolean;
    have_express: boolean;
    train: string;
    available_seats: number;
};

export type CarriageInfo = {
    coach: CoachInfo;
    seats: AvailableSeatInfo[];
};

export type CarriagesDetailsInfo = CarriageInfo[];

export type CarriageFilters = Partial<{
    haveFirstClass: boolean;
    haveSecondClass: boolean;
    haveThirdClass: boolean;
    haveFourthClass: boolean;
    haveWifi: boolean;
    haveAirConditioning: boolean;
    haveExpress: boolean;
}>;

