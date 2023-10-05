import React, { useCallback } from 'react';

import { FormValuesSpy, classname } from 'utils';
import { Form } from 'react-final-form';
import { FormIdEnum } from 'enums';
import { NumberTickets } from './number-tickets';

import './place-details-form.scss';
import { CarriageType } from './carriage-type';

type Props = {
    directionId: string;
}
const cn = classname('place-details-form');

export const PlaceDetailsForm = ({directionId}: Props) => {
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
                    <CarriageType directionId={directionId}/>
                </form>
            )}
        />
    );
};
