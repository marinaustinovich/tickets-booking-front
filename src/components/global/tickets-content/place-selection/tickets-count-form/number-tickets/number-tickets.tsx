import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Field, useForm, useField } from 'react-final-form';
import { NumberInput } from 'fields';

import './number-tickets.scss';

const cn = classname('number-tickets');
const MAX_NUMBER_TICKETS = 4;

type NumberInputFieldProps = {
    name: string;
    clueLocaleKey?: string;
    className?: string;
    max: number;
    placeholder?: string;
};

const NumberInputField = ({ name, clueLocaleKey, max, className, ...rest }: NumberInputFieldProps) => {
    const { t } = useTranslation('global');

    const {
        input: { value },
    } = useField(name);

    const number = max - (value || 0);
    const clueLocale = clueLocaleKey ? t(`${clueLocaleKey}`, { number: number.toString() }) : '';

    return (
        <div className={cn('number-people')}>
            <Field name={name} component={NumberInput} type='number' max={max} {...rest} />
            {clueLocaleKey && number !== 0 && <div className={cn('clue', [className])}>{clueLocale}</div>}
        </div>
    );
};

export const NumberTickets = () => {
    const { t } = useTranslation('global');
    const [currentMax, setCurrentMax] = useState(0);
    const locale = 'place-selection.number-tickets';
    const form = useForm();
    const maxValueForIncludeChildSeats = form.getState().values['adult'];

    useEffect(() => {
        setCurrentMax(maxValueForIncludeChildSeats ?? 0);
    }, [maxValueForIncludeChildSeats]);

    return (
        <div className={cn()}>
            <h4 className={cn('title')}>{t(`${locale}.title`)}</h4>
            <div className={cn('fields-block')}>
                <NumberInputField name='adult' clueLocaleKey={`${locale}.adult-clue`} max={MAX_NUMBER_TICKETS} placeholder={t(`${locale}.adult-placeholder`)} />
                <NumberInputField
                    name='child'
                    clueLocaleKey={`${locale}.child-clue`}
                    max={MAX_NUMBER_TICKETS}
                    className={cn('child')}
                    placeholder={t(`${locale}.child-placeholder`)}
                />
                <NumberInputField name='include-children' max={currentMax} placeholder={t(`${locale}.include-children-placeholder`)} />
            </div>
        </div>
    );
};
