import i18next from 'i18next';

import { FieldValidator } from './types';

type FormValues = {
    dateEnd?: string;
    dateStart?: string;
    [key: string]: any;
};

export const required: FieldValidator = value => (value ? undefined : i18next.t('common:validators.required'));

export const validateDates = <T extends FormValues>(values: T) => {
    const errors: Partial<T> = {} as Partial<T>;

    if (values.dateStart && values.dateEnd) {
        const startDate = new Date(values.dateStart);
        const endDate = new Date(values.dateEnd);

        if (endDate < startDate) {
            errors.dateEnd = i18next.t('common:validators.date-end');
        }
    }
    
    return errors;
};
