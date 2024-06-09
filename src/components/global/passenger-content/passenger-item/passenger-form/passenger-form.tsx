import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum } from 'enums';
import { FieldPrefix } from 'fields';
import { PassengerDataState, PassengerFormState } from 'types';
import { useAppDispatch } from 'store';
import { Divider, PersonDetailsBlock, PersonInfoBlock } from 'components';
import { ticketsActions } from 'store/ticket/slice';

import './passenger-form.scss';

type Props = {
    initialValues: PassengerFormState;
    prefix: string;
};
const cn = classname('passenger-form');

export const PassengerForm = ({ initialValues, prefix }: Props) => {
    const dispatch = useAppDispatch();
    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(
        async (values: PassengerDataState) => {
            console.log('dispatch', values)
         
            dispatch(ticketsActions.setPassengersDate(values));
        },
        [dispatch],
    );

    return (
        <Form<Partial<PassengerFormState>>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <form className={cn()} id={`${FormIdEnum.PASSENGER}-${prefix}`} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />
                    <FieldPrefix prefix={prefix}>
                        <PersonInfoBlock />
                        <Divider lineStyle='dashed' />
                        <PersonDetailsBlock />
                    </FieldPrefix>
                </form>
            )}
        />
    );
};
