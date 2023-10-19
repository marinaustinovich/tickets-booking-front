import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum } from 'enums';
import { FieldPrefix } from 'fields';
import { PassengerFormState } from 'types';
import { useAppSelector } from 'store';
import { carriagesFiltersSelector, passengersFormDataSelector } from 'store/ticket';
import { Divider, PersonDetailsBlock, PersonInfoBlock } from 'components';

import './passenger-form.scss';

type Props = {
    passengerNumber: number;
};
const cn = classname('passenger-form');

export const PassengerForm = ({ passengerNumber }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.passenger-form';
    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(async (values: PassengerFormState) => {
        console.log(passengerFormData, filters);
        console.log(values);
    }, []);

    const passengerFormData = useAppSelector(passengersFormDataSelector);
    const filters = useAppSelector(carriagesFiltersSelector);

    const initialValues: PassengerFormState = useMemo(() => {
        console.log(passengerFormData, filters);
        return {
            ...passengerFormData,
        };
    }, [passengerFormData]);

    return (
        <Form<PassengerFormState>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <form className={cn()} id={FormIdEnum.PASSENGER} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />
                    <FieldPrefix prefix={`passenger-${passengerNumber}`}>
                        <PersonInfoBlock />
                        <Divider lineStyle='dashed' />
                        <PersonDetailsBlock />
                    </FieldPrefix>
                </form>
            )}
        />
    );
};
