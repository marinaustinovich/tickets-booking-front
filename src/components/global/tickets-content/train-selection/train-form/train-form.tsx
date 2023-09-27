import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { DatePickerInput, FormControl, InputLabel, SwitchInput } from 'fields';
import { useAppDispatch } from 'store';
import { fetchRoutesAction } from 'store/route';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum } from 'enums';
import { CoupeIcon, ExpressIcon, SedentaryIcon, StarIcon, WifiIcon } from 'icons';
import { required } from 'validators';

import './train-form.scss';

type TrainFormState = {
    dateEnd: string;
    dateStart: string;
    toCity: string;
    fromCity: string;
};

type TrainFormProps = {
    initialValues?: TrainFormState;
};

const cn = classname('train-form');

export const TrainForm = ({ initialValues }: TrainFormProps) => {
    const { t } = useTranslation('global');
    const locale = 'tickets.trains.train-form';
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(
        async (values: TrainFormState) => {
            const { ...rest } = values;
            const preFilters = {
                ...rest,
            };
            console.log(preFilters)
            dispatch(fetchRoutesAction(preFilters));
        },
        [dispatch],
    );

    return (
        <Form<TrainFormState>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <form className={cn()} id={FormIdEnum.TRAVEL} onSubmit={handleSubmit}>
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
                </form>
            )}
        />
    );
};
