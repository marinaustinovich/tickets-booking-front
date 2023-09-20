import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Input } from 'components';
import { classname } from 'utils';

import './string-input.scss';
import { useTranslation } from 'react-i18next';

type Props = {
    input: FieldRenderProps<string>['input'];
    meta: FieldRenderProps<string>['meta'];
    label: string;
    help: string;
    placeholder?: string;
    required: boolean;
    className?: string;
    textarea?: boolean;
    resize?: 'vertical' | 'horizontal' | 'both' | 'none';
    autoComplete?: string;
    onChangeText?: (value: string) => void;
    suffix?: React.ReactNode;
    adornment?: React.ReactNode;
    disabled: boolean;
    inputSize?: 'default' | 'medium';
};

const cn = classname('string-input');

export const StringInput = (props: Props) => {
    const {
        input,
        meta,
        label,
        help,
        placeholder,
        required,
        disabled,
        className,
        textarea,
        autoComplete,
        resize = 'vertical',
        onChangeText,
        suffix,
        adornment,
        inputSize,
    } = props;

    const { t } = useTranslation('common');

    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const { name, onChange, ...inputProps } = input;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;
    const helpText = (isErrorVisible && error) || help;

    const placeholderText = placeholder === undefined ? t('commons.string-input-placeholder') : placeholder;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const text = e.target.value;

            onChange(text);
            onChangeText?.(text);
        },
        [onChange, onChangeText],
    );

    return (
        <div className={cn('', [className])}>
            {label && (
                <label className={cn('label')} htmlFor={name}>
                    {required && <span className={cn('label-required')}>* </span>}
                    {label}
                </label>
            )}
            {textarea ? (
                <textarea
                    style={{ resize }}
                    name={name}
                    className={cn('textarea-input', { warning: isErrorVisible })}
                    autoComplete={autoComplete}
                    placeholder={placeholderText}
                    onChange={handleChange}
                    {...inputProps}
                />
            ) : (
                <Input
                    className={cn('input', { warning: isErrorVisible, disabled })}
                    onChange={handleChange}
                    name={name}
                    warning={isErrorVisible}
                    placeholder={placeholderText}
                    autoComplete={autoComplete}
                    endAdornment={suffix}
                    startAdornment={adornment}
                    inputSize={inputSize}
                    {...inputProps}
                />
            )}
            {helpText && <div className={cn('help', { warning: isErrorVisible })}>{helpText}</div>}
        </div>
    );
};
