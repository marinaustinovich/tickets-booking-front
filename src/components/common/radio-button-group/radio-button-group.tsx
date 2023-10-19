import React, { useState, useEffect } from 'react';

import { RadioButton } from 'components';
import { classname } from 'utils';

import './radio-button-group.scss';

export type RadioOption = {
    label: string;
    description?: string;
    value: string;
};

type RadioButtonGroupProps = {
    name: string;
    label?: string;
    required?: boolean;
    options: RadioOption[];
    onChange?: (value: string) => void;
    checkedValue?: string;
    view?: 'primary' | 'default';
};

const cn = classname('radio-button-group');

export const RadioButtonGroup = ({ label, options, name, onChange, required, checkedValue, view = 'default' }: RadioButtonGroupProps) => {
    const [localCheckedValue, setLocalCheckedValue] = useState<string>('');

    useEffect(() => {
        if (options && options.length > 0 && !localCheckedValue) {
            setLocalCheckedValue(options[0].value);
            if (onChange) {
                onChange(options[0].value);
            }
        }
    }, [options, localCheckedValue, onChange]);

    const handleChange = (value: string) => {
        setLocalCheckedValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <fieldset className={cn('', { view })}>
            {label && (
                <legend className={cn('group-label')}>
                    {required && <span className={cn('group-label-required')}>* </span>}
                    {label}
                </legend>
            )}
            <div className={cn('options-wrapper')}>
                {options.map(({ label, description, value }) => {
                    const shortenedOptionLabel = label.replace(/\s+/g, '');
                    const optionId = `radio-option-${shortenedOptionLabel}`;

                    return (
                        <RadioButton
                            view={view}
                            key={optionId}
                            label={label}
                            value={value}
                            id={optionId}
                            name={name}
                            onChange={() => handleChange(value)}
                            description={description}
                            checked={checkedValue === value}
                        />
                    );
                })}
            </div>
        </fieldset>
    );
};
