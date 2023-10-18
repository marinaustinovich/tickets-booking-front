import React, { useCallback, useId, useEffect } from 'react';
import { FieldRenderProps } from 'react-final-form';
import Select, { ControlProps, DropdownIndicatorProps, IndicatorsContainerProps, components } from 'react-select';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'types';
import { CSSObject } from '@emotion/serialize';
import { DropdownIcon } from 'icons';
import { classname } from 'utils';

import './select-field.scss';

const cn = classname('react-select-container');

const DropdownIndicator = (props: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
        <DropdownIcon width={12} height={5} />
    </components.DropdownIndicator>
);

const styles = {
    control: (base: CSSObject, state: ControlProps) => {
        const isPassenger = state?.selectProps?.name?.includes('passenger');

        return {
            ...base,
            minHeight: isPassenger ? '50px' : '22px',
            boxShadow: 'none',
            border: isPassenger ? '1px solid #928F94' : 'none',
            borderRadius: isPassenger ? '5px' : 'none',
            backgroundColor: 'transparent',
            fontSize: isPassenger ? '24px' : '18px',
        };
    },
    placeholder: (base: CSSObject) => ({
        ...base,
        overflow: 'hidden',
        whiteSpace: 'nowrap' as const,
        color: 'var(--color-text-header)',
        fontSize: '18px',
    }),
    input: (base: CSSObject) => ({
        ...base,
        padding: '0',
        margin: '0',
        color: 'var(--color-button-text-default)',
    }),
    valueContainer: (base: CSSObject) => ({
        ...base,
        padding: '2px 12px',
    }),
    singleValue: (base: CSSObject) => ({
        ...base,
        overflow: 'visible',
    }),
    option: (base: CSSObject, state: any) => ({
        ...base,
        fontSize: '18px',
        fontVariant: 'all-small-caps',
        backgroundColor: state.isFocused ? 'var(--color-background-button-hover)' : 'var( --color-background-default)',
        color: state.isFocused ? 'var(--color-text-white)' : 'var(--color-background-form)',
        padding: '8px 11px',
        '&:hover': {
            backgroundColor: 'var(--color-background-button-hover)',
        },
    }),
    dropdownIndicator: (base: CSSObject, state: DropdownIndicatorProps) => {
        const isPassenger = state?.selectProps?.name?.includes('passenger');

        return {
            ...base,
            cursor: 'pointer',
            transition: 'all .2s ease',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
            display: isPassenger ? 'block' : 'none',
        };
    },
    clearIndicator: (base: CSSObject) => ({
        ...base,
        display: 'none',
    }),
    indicatorsContainer: (base: CSSObject, state: IndicatorsContainerProps) => {
        const isPassenger = state?.selectProps?.name?.includes('passenger');
        return {
            ...base,
            display: isPassenger ? 'block' : 'none',
            padding: '0 12px',
            gap: '6px',
        };
    },
    indicatorSeparator: (base: CSSObject) => ({
        ...base,
        display: 'none',
    }),
};

export const SelectField = ({ input, options, ...rest }: FieldRenderProps<string>) => {
    const { t } = useTranslation('common');

    const handleChange = useCallback(
        (option: SelectOption<string>) => {
            input.onChange(option?.value);
        },
        [input],
    );

    useEffect(() => {
        if (!input.value && options && options.length > 0) {
            handleChange(options[0]);
        }
    }, [input.value, options, handleChange]);

    return (
        <Select
            {...input}
            {...rest}
            className={cn('')}
            classNamePrefix='react-select'
            instanceId={useId()}
            isClearable={true}
            isSearchable={true}
            options={options}
            isMulti={false}
            onChange={handleChange}
            value={options?.find((option: SelectOption) => option.value === input.value)}
            styles={styles}
            placeholder={t('commons.placeholder')}
            components={{
                DropdownIndicator,
            }}
        />
    );
};
