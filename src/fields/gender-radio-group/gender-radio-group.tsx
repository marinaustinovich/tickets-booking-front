import React, { useMemo, useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { GenderEnum } from 'enums';
import { RadioButtonGroup, RadioOption } from 'components';

type Props = FieldRenderProps<string> & {
    label: string;
    className?: string;
};

export const GenderRadioGroup = ({ label, className, input, ...rest }: Props) => {
    const { name, value, onChange, onBlur } = input;
    const { t } = useTranslation('common');
    const locale = 'commons.gender-radio-group';

    const options: RadioOption[] = useMemo(
        () => [
            {
                label: t(`${locale}.male`),
                value: GenderEnum.MALE,
            },
            {
                label: t(`${locale}.female`),
                value: GenderEnum.FEMALE,
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

    return <RadioButtonGroup options={options} {...rest} name={name} checkedValue={value} onChange={handleChange} view='primary' />;
};
