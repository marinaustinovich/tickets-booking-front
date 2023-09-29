import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { MinPriceBlock } from '../min-price-block';

import './seat-row.scss';

type Props = {
    classSeat: string;
    count: number;
    minPrice: number;
};

const cn = classname('seat-row');

export const SeatRow = ({ classSeat, count, minPrice }: Props) => {
    const { t } = useTranslation('global');
    const localeClass = 'tickets.trains.classSeat';

    return (
        <div className={cn()}>
            <div className={cn('class-seat')}>{t(`${localeClass}.${classSeat}`)}</div>
            <div className={cn('count')}>{count}</div>
            <MinPriceBlock minPrice={minPrice} />
        </div>
    );
};
