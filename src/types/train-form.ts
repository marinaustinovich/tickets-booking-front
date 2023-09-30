import { SortByEnum } from "enums";

export type TrainFormState = {
    dateEnd?: string;
    dateStart?: string;
    toCityId: string;
    fromCityId: string;
    price?: number[];
    sort?: SortByEnum,
};
