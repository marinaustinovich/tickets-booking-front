import React, { useCallback, useEffect, useId, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ActionMeta, ControlProps, SingleValue, StylesConfig } from 'react-select';
import AsyncSelect from 'react-select/async';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'types';
import { CSSObject } from '@emotion/serialize';
import { InputError } from 'components';
import { classname } from 'utils';

import './async-select-input.scss';

const cn = classname('react-select-container');

const styles: StylesConfig<SelectOption<string>, false> = {
    control: (base: CSSObject, state: ControlProps<SelectOption<string>, false>) => ({
        ...base,
        boxShadow: 'none',
        minHeight: '60px',
        borderColor: `var(${state.selectProps.menuIsOpen ? '--color-primary' : '--color-button-border-default'})`,
        '&:hover': {
            borderColor: `var(${state.selectProps.menuIsOpen ? '--color-primary' : '--color-input-border-hover'})`,
        },
        fontSize: '18px',
    }),
    menu: (base: CSSObject) => ({
        ...base,
        backgroundColor: 'var(--color-background-options)',
        borderRadius: '3px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        marginTop: '4px',
    }),
    option: (base: CSSObject, state: any) => ({
        ...base,
        fontSize: '18px',
        fontVariant: 'all-small-caps',
        backgroundColor: state.isFocused
            ? 'var( --color-background-options)'
            : state.isSelected
            ? 'var(--color-border-default)'
            : 'var(--color-background-options)',
        color: 'var(--color-background-dark)',
        padding: '8px 12px',
        '&:hover': {
            backgroundColor: 'var(--color-input-border-hover)',
        },
    }),
    placeholder: (base: CSSObject) => ({
        ...base,
        overflow: 'hidden',
        whiteSpace: 'nowrap' as const,
        color: 'var(--color-text-header)',
        fontSize: '18px',
    }),
    input: (base: CSSObject) => ({
        ...base,
        minWidth: '2px',
        color: 'var(--color-button-text-default)',
    }),
    valueContainer: (base: CSSObject) => ({
        ...base,
        padding: '2px 12px',
    }),
    dropdownIndicator: (base: CSSObject) => ({
        ...base,
        display: 'none',
    }),
    clearIndicator: (base: CSSObject) => ({
        ...base,
        display: 'none',
    }),
    indicatorsContainer: (base: CSSObject) => ({
        ...base,
        padding: '0 12px',
        gap: '6px',
    }),
};

export const AsyncSelectInput = ({
    input,
    loadOptions,
    placeholder,
    meta,
    ...rest
}: FieldRenderProps<string> & { loadOptions: (inputValue: string) => Promise<SelectOption<string>[]> }) => {
    const { t } = useTranslation('common');

    const [selectedValue, setSelectedValue] = useState<SelectOption<string> | null>(null);

    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;

    useEffect(() => {
        const setSelectedOption = async () => {
            if (!input.value || selectedValue?.value === input.value) return;

            const options = await loadOptions(input.value);
            const foundOption = options?.find(option => option.value === input.value);
            setSelectedValue(foundOption || null);
        };
        setSelectedOption();
    }, [input.value, loadOptions, selectedValue]);

    const handleChange = useCallback(
        (option: SingleValue<SelectOption<string>>, actionMeta: ActionMeta<SelectOption<string>>) => {
            if (actionMeta.action === 'select-option' && option) {
                input.onChange(option.value);
                setSelectedValue(option);
            }
        },
        [input],
    );

    return (
        <div className={cn('')}>
            <AsyncSelect
                {...input}
                {...rest}
                classNamePrefix='react-select'
                instanceId={useId()}
                isClearable={true}
                isSearchable={true}
                cacheOptions={false}
                noOptionsMessage={() => null}
                loadOptions={loadOptions}
                defaultOptions
                isMulti={false}
                onChange={handleChange}
                value={selectedValue}
                components={{
                    IndicatorSeparator: () => null,
                }}
                styles={styles}
                placeholder={placeholder ?? t('commons.placeholder')}
            />
            {isErrorVisible && <InputError error={error} />}
        </div>
    );
};
