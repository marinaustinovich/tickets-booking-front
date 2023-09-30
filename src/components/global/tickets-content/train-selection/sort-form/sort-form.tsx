import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { SortBySelect } from 'fields';
import { useAppDispatch, useAppSelector } from 'store';
import { citiesIdSelector, fetchRoutesAction } from 'store/route';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum, SortByEnum } from 'enums';
import { validateDates } from 'validators';
import { TrainFormState } from 'types';

import './sort-form.scss';

const cn = classname('sort-form');

export const SortForm = () => {
    const { t } = useTranslation('global');
    const locale = 'tickets.trains.sort-form';
    const dispatch = useAppDispatch();
    const citiesId = useAppSelector(citiesIdSelector);

    const initialValues = useMemo(() => {
        const { fromCityId, toCityId } = citiesId;

        return {
            toCityId: toCityId || '',
            fromCityId: fromCityId || '',
            sort: SortByEnum.DATE
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
                <form className={cn()} id={FormIdEnum.SORT} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />

                    <Field name='sort' component={SortBySelect} parse={value => value} label={t(`${locale}.sort-field-label`)}/>
                </form>
            )}
        />
    );
};
