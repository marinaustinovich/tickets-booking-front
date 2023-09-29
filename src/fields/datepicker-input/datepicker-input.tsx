import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { DatePicker, InputError } from 'components';
import { classname } from 'utils';

import './datepicker-input.scss';

const cn = classname('datepicker-input');

type DatePickerInputProps = {
    input: FieldRenderProps<Date>['input'];
    meta: FieldRenderProps<Date>['meta'];
    className?: string;
    isClearable?: boolean;
    placeholder?: string;
    label?: string;
    required?: boolean;
};

export const DatePickerInput = ({ input, meta, className, ...restProps }: DatePickerInputProps) => {
    const {dirty, submitError, dirtySinceLastSubmit } = meta;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = (dirty && !!error) || (!dirtySinceLastSubmit && submitError);

    return (
        <div className={cn('', [className])}>
            <DatePicker input={input} meta={meta} {...restProps} />
            {isErrorVisible && <InputError error={error} />}
        </div>
    );
};
