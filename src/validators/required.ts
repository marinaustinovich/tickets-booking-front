import i18next from 'i18next';

import { FieldValidator } from './types';

type FormValues = {
    dateEnd?: string | null;
    dateStart?: string | null;
    [key: string]: any;
};

export const required: FieldValidator = value => (value ? undefined : i18next.t('common:validators.required'));

export const validateDates = <T extends FormValues>(values: T) => {
    const errors: Partial<T> = {} as Partial<T>;

    const startDate = values.dateStart ? new Date(values.dateStart) : null;
    const endDate = values.dateEnd ? new Date(values.dateEnd) : null;

    if (startDate && endDate && endDate < startDate) {
        errors.dateEnd = i18next.t('common:validators.date-end');
    }
    
    return errors;
};
