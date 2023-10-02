import React from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Range } from '../range';

import './transit-time-block.scss';

type Props = {
    nameField: string;
};

type TransitTimeRowProps = Props & {
    label?: string;
    direction: string;
    className?: string;
};

const cn = classname('transit-time-block');

export const TransitTimeRow = ({ nameField, label, direction, className }: TransitTimeRowProps) => (
    <div className={cn('row')}>
        <span className={cn(`label-${className}`)}>{label}</span>
        <Field size='small' name={`${nameField}.${direction}`} component={Range} min={0} max={24} className={cn('time')} />
    </div>
);

export const TransitTimeBlock = ({ nameField }: Props) => {
    const { t } = useTranslation('common');
    const locale = 'commons.transit-time-block';

    return (
        <div className={cn('')}>
            <TransitTimeRow label={t(`${locale}.departure-time-field-label`)} direction='departureHour' nameField={nameField} className='left' />
            <TransitTimeRow label={t(`${locale}.arrival-time-field-label`)} direction='arrivalHour' nameField={nameField} className='right' />
        </div>
    );
};
