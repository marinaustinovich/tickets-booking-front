import React, { useMemo } from 'react';
import { toKebabCase } from 'js-convert-case';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { SortByEnum } from 'enums';
import { SelectField } from 'fields';
import { classname } from 'utils';

import './sort-by-select.scss';

const cn = classname('sort-by-select');

export const SortBySelect = (props: FieldRenderProps<string>) => {
    const { t } = useTranslation('common');

    const options = useMemo(
        () =>
            Object.values(SortByEnum).map(sortByItem => ({
                label: t(`commons.sort-by-select.${toKebabCase(sortByItem)}`),
                value: sortByItem,
            })),
        [t],
    );

    return (
        <label className={cn('')}>
            <span className={cn('label')}>{props.label}</span>
            <SelectField options={options} {...props} />
        </label>
    );
};
