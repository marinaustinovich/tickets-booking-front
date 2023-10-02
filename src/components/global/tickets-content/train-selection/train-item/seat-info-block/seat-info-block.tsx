import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classname } from 'utils';
import { DepartureInfo, PriceInfo, SeatsInfo } from 'types';
import { AdvantagesBlock, Button, SeatRow } from 'components';

import './seat-info-block.scss';

type Props = {
    departure: DepartureInfo;
    availableSeatsInfo: SeatsInfo;
    priceInfo: Record<string, PriceInfo>;
};

const cn = classname('seat-info-block');

export const SeatInfoBlock = ({ availableSeatsInfo, priceInfo, departure }: Props) => {
    const navigate = useNavigate();
    const { t } = useTranslation('global');
    const { have_wifi: haveWiFi, is_express: isExpress } = departure;

    const handleClick = useCallback(() => navigate('place'), [navigate]);

    return (
        <div className={cn()}>
            {Object.entries(availableSeatsInfo).map(([classSeat, count]) => {
                const prices = priceInfo[classSeat];

                return <SeatRow key={classSeat} classSeat={classSeat} count={count} prices={prices} />;
            })}
            <AdvantagesBlock haveWiFi={haveWiFi} isExpress={isExpress} />
            <Button view='primary-white' size='large-narrow' onClick={handleClick}>
                {t('tickets.trains.select-button-label')}
            </Button>
        </div>
    );
};
