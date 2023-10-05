import i18next from 'i18next';

import { FieldValidator } from './types';
import { isString } from 'utils';

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const enoughCharsAfterAt = (value: string) => value.substring(value.indexOf('@') + 1, value.lastIndexOf('.')).length > 1;
const enoughCharsAfterLastPoint = (value: string) => value.substring(value.lastIndexOf('.') + 1).length > 1;

export const emailValidator: FieldValidator = value => {
    if (!value || !isString(value)) {
        return null;
    }

    return pattern.test(value) && enoughCharsAfterAt(value) && enoughCharsAfterLastPoint(value) && !/[А-Яа-яЁё]/.test(value)
        ? null
        : i18next.t('common:validators.email');
};
