import { FieldValidator, FieldValue } from './types';

export * from './required';
export * from './types';
export * from './email';


export const composeValidators = (...validators: Array<FieldValidator | null>) => {
    const validatorsWithoutNulls = validators.filter(validator => !!validator) as FieldValidator[];

    return (value: FieldValue) => validatorsWithoutNulls.reduce<string | null | undefined>((error, validator) => error || validator(value), null);
};
