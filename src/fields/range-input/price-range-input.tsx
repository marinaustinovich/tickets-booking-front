import { useTranslation } from 'react-i18next';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Range } from 'components';
import { classname } from 'utils';

import './price-range-input.scss';

type Props = {
    input: FieldRenderProps<number>['input'];
    meta: FieldRenderProps<string>['meta'];
    min: number;
    max: number;
};

const cn = classname('price-range-input');

export const PriceRangeInput = (props: Props) => {
    const { t } = useTranslation('common');

    return (
        <div className={cn('')}>
            <div className={cn('labels')}>
                <span>{t('commons.range-input.from-field-label')}</span>
                <span>{t('commons.range-input.before-field-label')}</span>
            </div>
            <Range {...props} />
        </div>
    );
};
