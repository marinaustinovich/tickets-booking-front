import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { ResultsPerPageRadioGroup, SortBySelect } from 'fields';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchRoutesAction, sortFiltersSelector, trainFiltersSelector } from 'store/route';
import { FormValuesSpy, classname } from 'utils';
import { FormIdEnum } from 'enums';
import { SortFormState } from 'types';

import './sort-form.scss';

const cn = classname('sort-form');

export const SortForm = () => {
    const { t } = useTranslation('global');
    const locale = 'tickets.trains.sort-form';
    const dispatch = useAppDispatch();
    const trainFilters = useAppSelector(trainFiltersSelector);
    const sortFilters = useAppSelector(sortFiltersSelector);
    console.log(sortFilters);

    const initialValues: SortFormState = useMemo(() => {
        const { sort, limit } = sortFilters;
        return {
            ...trainFilters,
            toCityId: trainFilters.toCityId || '',
            fromCityId: trainFilters.fromCityId || '',
            sort,
            limit,
        };
    }, [trainFilters, sortFilters]);

    const handleFormSubmit = useCallback(() => undefined, []);

    const handleFormChange = useCallback(
        async (values: SortFormState) => {
            const { price, ...rest } = values;
            const preFilters = {
                ...rest,
                priceFrom: price ? price[0] : null,
                priceTo: price ? price[1] : null,
            };

            dispatch(fetchRoutesAction(preFilters));
        },
        [dispatch],
    );

    return (
        <Form<SortFormState>
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <form className={cn()} id={FormIdEnum.SORT} onSubmit={handleSubmit}>
                    <FormValuesSpy onChange={handleFormChange} debounceTime={300} />
                    <Field name='sort' component={SortBySelect} parse={value => value} label={t(`${locale}.sort-field-label`)} />
                    <Field name='limit' component={ResultsPerPageRadioGroup} parse={value => value} label={t(`${locale}.results-per-page-field-label`)} />
                </form>
            )}
        />
    );
};
