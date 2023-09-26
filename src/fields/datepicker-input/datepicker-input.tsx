import React from 'react';
import { FieldRenderProps, Field } from 'react-final-form';

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

export const DatePickerInput = (props: DatePickerInputProps) => {
    const { input, meta, className } = props;
    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const { name } = input;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;

    return (
        <div className={cn('', [className])}>
            <Field name={name} component={DatePicker} {...props} />
            {isErrorVisible && <InputError error={error}/>}
        </div>
    );
};
