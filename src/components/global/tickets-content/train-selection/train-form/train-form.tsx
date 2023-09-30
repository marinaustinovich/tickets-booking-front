import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { DatePickerInput, FormControl, InputLabel, SwitchInput, PriceRangeInput } from 'fields';
import { useAppDispatch, useAppSelector } from 'store';
import { citiesIdSelector, fetchRoutesAction } from 'store/route';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum } from 'enums';
import { BackArrowIcon, CoupeIcon, ExpressIcon, SedentaryIcon, StarIcon, ToArrowIcon, WifiIcon } from 'icons';
import { validateDates } from 'validators';
import { DirectionBlock } from 'components';
import { TrainFormState } from 'types';


import './train-form.scss';

const cn = classname('train-form');

export const TrainForm = () => {
    const { t } = useTranslation('global');
    const locale = 'tickets.trains.train-form';
    const dispatch = useAppDispatch();
    const citiesId = useAppSelector(citiesIdSelector);

    const initialValues = useMemo(() => {
        const { fromCityId, toCityId } = citiesId;

        return {
            toCityId: toCityId || '',
            fromCityId: fromCityId || '',
        };
    }, [citiesId]);

    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(
        async (values: TrainFormState) => {
            const { price, ...rest } = values;
            const preFilters = {
                ...rest,
                priceFrom: price ? price[0] : null,
                priceTo: price ? price[1] : null,
            };
            console.log(preFilters);
            dispatch(fetchRoutesAction(preFilters));
        },
        [dispatch],
    );

    return (
        <Form<TrainFormState>
            onSubmit={handleFormSubmit}
            validate={validateDates}
            initialValues={initialValues}
            render={({ handleSubmit, values }) => (
                <form className={cn()} id={FormIdEnum.TRAIN} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />
                    <div className={cn('date-group')}>
                        <FormControl>
                            <InputLabel>{t(`${locale}.travel-date-field-label`)}</InputLabel>
                            <Field name='dateStart' component={DatePickerInput} parse={value => value} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t(`${locale}.return-date-field-label`)}</InputLabel>
                            <Field name='dateEnd' component={DatePickerInput} parse={value => value} />
                        </FormControl>
                    </div>
                    <div className={cn('switch-group')}>
                        <Field name='haveSecondClass' Icon={CoupeIcon} component={SwitchInput} label={t(`${locale}.coupe-field-label`)} />
                        <Field name='haveThirdClass' Icon={CoupeIcon} component={SwitchInput} label={t(`${locale}.reserved-seat-field-label`)} />
                        <Field name='haveFourthClass' Icon={SedentaryIcon} component={SwitchInput} label={t(`${locale}.sedentary-field-label`)} />
                        <Field name='haveFirstClass' Icon={StarIcon} component={SwitchInput} label={t(`${locale}.lux-field-label`)} />
                        <Field name='haveWiFi' Icon={WifiIcon} component={SwitchInput} label={t(`${locale}.wi-fi-field-label`)} />
                        <Field name='haveExpress' Icon={ExpressIcon} component={SwitchInput} label={t(`${locale}.express-field-label`)} />
                    </div>
                    <div className={cn('price')}>
                        <FormControl>
                            <InputLabel>{t(`${locale}.price-field-label`)}</InputLabel>
                            <Field
                                name='price'
                                component={PriceRangeInput}
                                min={t(`${locale}.min-count-price-field-label`)}
                                max={t(`${locale}.max-count-price-field-label`)}
                            />
                        </FormControl>
                    </div>
                    <DirectionBlock nameField='there' label={t(`${locale}.there-field-label`)} Icon={ToArrowIcon} />
                    <DirectionBlock nameField='back' label={t(`${locale}.back-field-label`)} Icon={BackArrowIcon} />
                </form>
            )}
        />
    );
};
