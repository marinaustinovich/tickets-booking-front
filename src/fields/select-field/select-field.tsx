import React, { useCallback, useId } from 'react';
import { FieldRenderProps } from 'react-final-form';
import Select, { ControlProps } from 'react-select';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'types';
import { CSSObject } from '@emotion/serialize';

import { classname } from 'utils';

import './select-field.scss';

const cn = classname('react-select-container');

const styles = {
    control: (base: CSSObject, state: ControlProps) => ({
        ...base,
        boxShadow: 'none',
        minHeight: '60px',
        borderColor: `var(${state.selectProps.menuIsOpen ? '--color-primary' : '--color-button-border-default'})`,
        '&:hover': {
            borderColor: `var(${state.selectProps.menuIsOpen ? '--color-primary' : '--color-input-border-hover'})`,
        },
        fontSize: '18px',
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

export const SelectField = ({ input, options, ...rest }: FieldRenderProps<string>) => {
    const { t } = useTranslation('common');
    const handleChange = useCallback(
        (option: SelectOption<string>) => {
            input.onChange(option?.value);
        },
        [input],
    );

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
            components={{
                IndicatorSeparator: () => null,
            }}
            styles={styles}
            placeholder={t('commons.placeholder')}
        />
    );
};