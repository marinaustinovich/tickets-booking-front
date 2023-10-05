import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FormValuesSpy, classname } from 'utils';
import { Form } from 'react-final-form';
import { FormIdEnum } from 'enums';
import { NumberTickets } from './number-tickets';

import './place-details-form.scss';

const cn = classname('place-details-form');

export const PlaceDetailsForm = () => {
    const { t } = useTranslation('global');
    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(async (values: any) => {
        console.log(values);
    }, []);

    return (
        <Form
            onSubmit={handleFormSubmit}
            render={({ handleSubmit }) => (
                <form className={cn()} id={FormIdEnum.TICKET} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />
                    <NumberTickets />
                </form>
            )}
        />
    );
};
