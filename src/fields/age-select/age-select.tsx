import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { AgeEnum } from 'enums';
import { SelectField } from 'fields';
import { classname } from 'utils';

const cn = classname('age-select');

export const AgeSelect = (props: FieldRenderProps<string>) => {
    const { t } = useTranslation('common');

    const options = useMemo(
        () =>
            Object.values(AgeEnum).map(age => ({
                label: t(`commons.age-select.${age}`),
                value: age,
            })),
        [t],
    );

    return <SelectField options={options} {...props} className={cn('')} />;
};
