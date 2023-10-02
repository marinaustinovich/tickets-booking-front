export type TrainFormState = {
    dateEnd?: string | null;
    dateStart?: string | null;
    toCityId: string;
    fromCityId: string;
    haveFirstClass?: boolean;
    haveSecondClass?: boolean;
    haveThirdClass?: boolean;
    haveFourthClass?: boolean;
    haveWifi?: boolean;
    haveAirConditioning?: boolean;
    haveExpress?: boolean;
    price?: number[];
};
