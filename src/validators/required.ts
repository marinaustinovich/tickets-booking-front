import i18next from 'i18next';

import { FieldValidator } from './types';

export const required: FieldValidator = value => (value ? undefined : i18next.t('common:validators.required'));
