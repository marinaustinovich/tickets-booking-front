import React, { memo, useState } from 'react';
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';
import { FieldRenderProps } from 'react-final-form';

import { IconButton, Input } from 'components';
import { ArrowLeftWithoutStickIcon, ArrowRightWithoutStickIcon, CalendarIcon } from 'icons';
import { classname } from 'utils';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';
import { useTranslation } from 'react-i18next';

const cn = classname('datepicker');

type DatePickerProps = Omit<ReactDatePickerProps, 'onChange'> & FieldRenderProps<string>;

export const DatePicker = ({ input, placeholder, className, ...rest }: DatePickerProps) => {
    const { t } = useTranslation('common');
    const locale = 'commons.datepicker';
    const [value, setValue] = useState<Date | null>(input.value ? new Date(input.value) : null);

    const DatePickerCustomHeader = memo(function DatePickerCustomHeader({ decreaseMonth, increaseMonth, date }: ReactDatePickerCustomHeaderProps) {
        return (
            <div className={cn('header')}>
                <IconButton className={cn('navigation')} Icon={ArrowLeftWithoutStickIcon} onClick={decreaseMonth} size='mini'/>
                <div className={cn('current-date')}>
                    <span className={cn('current-month')}> {t(`${locale}.${date.getMonth()}`)}</span>
                </div>
                <IconButton className={cn('navigation')} Icon={ArrowRightWithoutStickIcon} onClick={increaseMonth} size='mini'/>
            </div>
        );
    });

    return (
        <ReactDatePicker
            name={input.name}
            calendarClassName={cn('', [className])}
            renderCustomHeader={props => <DatePickerCustomHeader {...props} />}
            customInput={<Input endAdornment={<CalendarIcon />} />}
            selected={value}
            onChange={date => {
                setValue(date);
                input.onChange(date?.toISOString() || null);
            }}
            minDate={new Date()} 
            filterDate={(date: Date) => {
                return date >= new Date();
            }}
            shouldCloseOnSelect={true}
            calendarStartDay={1}
            useWeekdaysShort={false}
            showPopperArrow={false}
            placeholderText={placeholder ?? t(`${locale}.date-input-placeholder`)}
            {...rest}
        />
    );
};
