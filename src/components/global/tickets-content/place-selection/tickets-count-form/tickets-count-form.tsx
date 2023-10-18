import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { FormValuesSpy, classname } from 'utils';

import { FormIdEnum } from 'enums';
import { useAppDispatch } from 'store';
import { ticketsActions } from 'store/ticket/slice';
import { NumberTickets } from './number-tickets';

import './tickets-count-form.scss';

const cn = classname('tickets-count-form');

export const TicketsCountForm = () => {
    const dispatch = useAppDispatch();
    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(async (values: any) => {
        dispatch(ticketsActions.setTicketsCount(values));
    }, [dispatch]);

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
