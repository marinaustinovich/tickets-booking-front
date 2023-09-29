import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { RubIcon } from 'icons';

import './min-price-block.scss';

type Props = {
    minPrice: number;
    view?: 'default' | 'primary';
};

const cn = classname('min-price-block');

export const MinPriceBlock = ({ minPrice, view = 'default' }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn('', { view })}>
            <span className={cn('label')}>{t('tickets.trains.min-price')}</span>
            <span className={cn('value')}>{minPrice}</span>
            <RubIcon />
        </div>
    );
};
