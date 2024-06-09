import { AgeEnum, DocumentTypeEnum, GenderEnum } from 'enums';

export type PassengerFormState = Partial<{
    isAdult: AgeEnum;
    gender: GenderEnum;
    firsName: string;
    lastName: string;
    birthday: string;
    documentType: DocumentTypeEnum;
    documentData: string;
    documentNumber: string;
    documentSeries: string;
    limitedMobility: boolean;
}>;

export type PassengerDataState = {
    [key: string]: PassengerFormState;
  };

export type PersonInfo = {
    is_adult: boolean;
    first_name: string;
    last_name: string;
    patronymic: string;
    gender: boolean;
    birthday: string;
    document_type: string;
    document_data: string;
};
