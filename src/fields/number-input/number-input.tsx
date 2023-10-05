import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Input } from 'components';
import { classname } from 'utils';

import './number-input.scss';

type Props = FieldRenderProps<number, HTMLInputElement>;

const cn = classname('number-input');

export const NumberInput = (props: Props) => {
    const {
        input,
        meta,
        label,
        help,
        placeholder,
        required,
        disabled,
        className,
        autoComplete,
        suffix,
        adornment,
        inputSize,
        max,
    } = props;

    const { t } = useTranslation('common');

    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const { name, onChange, ...inputProps } = input;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;
    const helpText = (isErrorVisible && error) || help;

    const placeholderText = placeholder === undefined ? t('commons.placeholder') : placeholder;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          let inputValue = e.target.value;
      
          if (max != null && inputValue > max) {
            inputValue = max.toString();
            e.target.value = inputValue;
          }
      
          onChange(inputValue); 
        },
        [max, onChange]
      );

    return (
        <div className={cn('', [className])}>
            {label && (
                <label className={cn('label')} htmlFor={name}>
                    {required && <span className={cn('label-required')}>* </span>}
                    {label}
                </label>
            )}
            <Input
                className={cn('input', { warning: isErrorVisible, disabled })}
                onInput={handleChange}
                name={name}
                warning={isErrorVisible}
                placeholder={placeholderText}
                autoComplete={autoComplete}
                endAdornment={suffix}
                startAdornment={adornment}
                inputSize={inputSize}
                max={max}
                {...inputProps}
            />
            {helpText && <div className={cn('help', { warning: isErrorVisible })}>{helpText}</div>}
        </div>
    );
};
