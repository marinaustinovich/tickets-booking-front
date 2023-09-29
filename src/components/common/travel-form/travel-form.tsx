import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { DatePickerInput, FormControl, InputLabel } from 'fields';
import { useAppDispatch } from 'store';
import { fetchRoutesAction } from 'store/route';
import { classname } from 'utils';
import { FormIdEnum } from 'enums';
import { required, validateDates } from 'validators';
import { Button } from '../button';
import { CircularDirectionArrowsIcon } from 'icons';
import { IconButton } from '../icon-button';
import { CitiesInput } from './cities-input';

import './travel-form.scss';

type TravelFormState = {
    dateEnd: string;
    dateStart: string;
    toCity: string;
    fromCity: string;
};

type TravelFormProps = {
    initialValues?: TravelFormState;
    isRow?: boolean;
};

const cn = classname('travel-form');

export const TravelForm = ({ initialValues, isRow }: TravelFormProps) => {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(
        async (values: TravelFormState) => {
            const { toCity, fromCity, ...rest } = values;
            const preFilters = {
                ...rest,
                fromCityId: fromCity,
                toCityId: toCity,
            };

            dispatch(fetchRoutesAction(preFilters));
            navigate('/tickets');
        },
        [navigate, dispatch],
    );

    const handleSwapFields = useCallback((form: any) => {
        const toValue = form.getFieldState('toCity')?.value;
        const fromValue = form.getFieldState('fromCity')?.value;

        form.change('toCity', fromValue);
        form.change('fromCity', toValue);
    }, []);

    return (
        <Form<TravelFormState>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validate={validateDates}
            render={({ handleSubmit, form }) => (
                <form className={cn('', { row: isRow })} id={FormIdEnum.TRAVEL} onSubmit={handleSubmit}>
                    <div className={cn('from-wrapper')}>
                        <FormControl>
                            <InputLabel>{t('travel-form.direction-label')}</InputLabel>
                            <Field name='fromCity' component={CitiesInput} placeholder={t('travel-form.from-placeholder')} validate={required} />
                        </FormControl>
                        <IconButton className={cn('swap-icon')} Icon={CircularDirectionArrowsIcon} onClick={() => handleSwapFields(form)} />
                    </div>
                    <Field name='toCity' component={CitiesInput} placeholder={t('travel-form.to-placeholder')} validate={required} />
                    <FormControl>
                        <InputLabel>{t('travel-form.date-label')}</InputLabel>
                        <Field name='dateStart' component={DatePickerInput} parse={value => value} />
                    </FormControl>
                    <Field name='dateEnd' component={DatePickerInput} parse={value => value} />
                    <Button className={cn('submit')} view='primary' type='submit'>
                        {t('travel-form.button-label')}
                    </Button>
                </form>
            )}
        />
    );
};
