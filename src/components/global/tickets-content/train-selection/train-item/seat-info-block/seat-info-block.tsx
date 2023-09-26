import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { PriceInfo, SeatsInfo } from 'types';
import { Button, SeatRow } from 'components';

import './seat-info-block.scss';

type Props = {
    availableSeatsInfo: SeatsInfo;
    priceInfo: Record<string, PriceInfo>;
};
const cn = classname('seat-info-block');

export const SeatInfoBlock = ({ availableSeatsInfo, priceInfo }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn()}>
            {Object.entries(availableSeatsInfo).map(([classSeat, count]) => {
                const prices = priceInfo[classSeat];
                const minPriceValue = prices ? Math.min(...Object.values(prices)) : 0; // или любое другое значение по умолчанию

                return <SeatRow key={classSeat} classSeat={classSeat} count={count} minPrice={minPriceValue} />;
            })}
            <Button view='primary-white' size='large-narrow'>{t('tickets.trains.select-button-label')}</Button>
        </div>
    );
};
