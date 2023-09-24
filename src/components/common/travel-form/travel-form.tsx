import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { DatePickerInput, StringInput } from 'fields';
import { classname } from 'utils';

import { FormIdEnum } from 'enums';
import { required } from 'validators';

import './travel-form.scss';
import { Button } from '../button';
import { CircularDirectionArrowsIcon } from 'icons';
import { IconButton } from '../icon-button';

type TravelFormState = {
    dateTo: string;
    dateFrom: string;
    to: string;
    from: string;
};

type TravelFormProps = {
    initialValues?: TravelFormState;
};

const cn = classname('travel-form');

export const TravelForm = ({ initialValues }: TravelFormProps) => {
    const { t } = useTranslation('common');

    const handleFormSubmit = useCallback(async (values: TravelFormState) => {
        console.log(values);
    }, []);

    const handleSwapFields = useCallback((form: any) => {
        const toValue = form.getFieldState('to')?.value;
        const fromValue = form.getFieldState('from')?.value;

        form.change('to', fromValue);
        form.change('from', toValue);
    }, []);

    return (
        <Form<TravelFormState>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form }) => (
                <form className={cn()} id={FormIdEnum.TRAVEL} onSubmit={handleSubmit}>
                    <div className={cn('from-wrapper')}>
                        <Field name='from' component={StringInput} placeholder={t('travel-form.from-placeholder')} label={t('travel-form.direction-label')} />
                        <IconButton className={cn('swap-icon')} Icon={CircularDirectionArrowsIcon} onClick={() => handleSwapFields(form)} />
                    </div>
                    <Field name='to' component={StringInput} placeholder={t('travel-form.to-placeholder')} />
                    <Field name='dateFrom' component={DatePickerInput} validate={required} parse={value => value} label={t('travel-form.date-label')} />
                    <Field name='dateTo' component={DatePickerInput} validate={required} parse={value => value} />
                    <Button className={cn('submit')} view='primary'>
                        {t('travel-form.button-label')}
                    </Button>
                </form>
            )}
        />
    );
};
