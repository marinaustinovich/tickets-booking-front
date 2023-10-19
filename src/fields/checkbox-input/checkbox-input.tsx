import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Checkbox } from 'components';
import { classname } from 'utils';

import './checkbox-input.scss';

type Props = {
    input: FieldRenderProps<boolean>['input'];
    meta: FieldRenderProps<boolean>['meta'];
    size?: 'default' | 'mini';
    className?: string;
};

export const CheckboxInput = (props: Props) => {
    const { input, size, className } = props;
    const { value, onChange, onBlur } = input;

    const handleChange = useCallback(
        (value: boolean) => {
            onChange?.(value);
            onBlur();
        },
        [onBlur, onChange],
    );

    return <Checkbox className={className} onChange={handleChange} checked={value} size={size} />;
};

const cn = classname('labeled-check-box');

export const LabeledCheckboxInput = (
    props: Props & {
        label?: string;
    },
) => {
    const { input, size, className, label } = props;
    const { value, onChange, onBlur } = input;

    const handleChange = useCallback(
        (value: boolean) => {
            onChange?.(value);
            onBlur();
        },
        [onBlur, onChange],
    );

    return (
        <div className={cn()}>
            <Checkbox className={className} onChange={handleChange} checked={value} size={size} />
            <span className={cn('label')} onClick={() => handleChange(!value)}>
                {label}
            </span>
        </div>
    );
};
