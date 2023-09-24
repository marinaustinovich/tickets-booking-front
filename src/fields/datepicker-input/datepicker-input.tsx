import React from 'react';
import { FieldRenderProps, Field } from 'react-final-form';

import { DatePicker } from 'components';
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

export const DatePickerInput = (props: DatePickerInputProps) => {
    const { input, label, required, meta, className } = props;
    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const { name } = input;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;

    return (
        <div className={cn('', [className])}>
            {label && (
                <label className={cn('label')} htmlFor={name}>
                    {required && <span className={cn('label-required')}>*</span>} {label}
                </label>
            )}
            <Field name={name} component={DatePicker} {...props} />
            {isErrorVisible && <div className={cn('error')}>{error}</div>}
        </div>
    );
};
