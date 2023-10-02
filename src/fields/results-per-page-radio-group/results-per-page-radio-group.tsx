import React, { useMemo, useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { ResultsPerPageEnum } from 'enums';
import { RadioButtonGroup, RadioOption } from 'components';
import { classname } from 'utils';

import './results-per-page-radio-group.scss';

const cn = classname('results-per-page-radio-group');

type Props = FieldRenderProps<string> & {
    label: string;
    className?: string;
};

export const ResultsPerPageRadioGroup = ({ label, className, input, ...rest }: Props) => {
    const { name, value, onChange, onBlur } = input;
    const { t } = useTranslation('common');
    const locale = 'commons.results-per-page';

    const options: RadioOption[] = useMemo(
        () => [
            {
                label: t(`${locale}.five`),
                value: ResultsPerPageEnum.FIVE,
            },
            {
                label: t(`${locale}.ten`),
                value: ResultsPerPageEnum.TEN,
            },
            {
                label: t(`${locale}.twenty`),
                value: ResultsPerPageEnum.TWENTY,
            },
        ],
        [t],
    );

    const handleChange = useCallback(
        (newValue: string) => {
            onChange(newValue);
            onBlur();
        },
        [onBlur, onChange],
    );

    return (
        <label className={cn('')}>
            <span className={cn('label')}>{label}</span>
            <RadioButtonGroup options={options} {...rest} name={name} checkedValue={value} onChange={handleChange}/>
        </label>
    );
};
