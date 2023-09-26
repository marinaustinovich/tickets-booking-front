import React, { useCallback } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

import { AsyncSelectInput } from 'fields';
import { SelectOption } from 'types';

import { fetchCities } from 'api/city';

export const CitiesInput = ({ input, ...props }: FieldRenderProps<string>) => {
    const loadOptions = useCallback(async (inputValue: string): Promise<SelectOption[]> => {
        if (!inputValue) return [];

        try {
            const cities = await fetchCities({ name: inputValue });

            return cities;
        } catch (error) {
            return [];
        }
    }, []);

    return <Field component={AsyncSelectInput} {...props} {...input} loadOptions={loadOptions} />;
};
