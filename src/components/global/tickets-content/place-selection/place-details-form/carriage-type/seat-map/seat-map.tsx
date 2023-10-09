import React, { useCallback, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { InteractiveCarriageMap, NumberCarriageBlock, SeatMapHeader, SeatPriceTable } from 'components';
import { classname } from 'utils';
import { CarriagesDetailsInfo } from 'types/';
import { useAppSelector } from 'store';
import { selectedCarriageSelector } from 'store/ticket';

import './seat-map.scss';

type Props = { carriages: CarriagesDetailsInfo };

const cn = classname('seat-map');

export const SeatMap = ({ carriages }: Props) => {
    const { t } = useTranslation('global');

    const [index, setIndex] = useState<number>(0);
    const carriage = useAppSelector(selectedCarriageSelector(index));

    const availableSeats = useMemo(() => carriage.seats.filter(seat => seat.available), [carriage.seats]);

    const handleNumberClick = useCallback((id: string, index: number) => {
        setIndex(index);
    }, []);

    return (
        <div className={cn()}>
            <SeatMapHeader carriages={carriages} onNumberClick={handleNumberClick} />
            <div className={cn('carriage-details')}>
                <NumberCarriageBlock numberCarriage={index} />
                <SeatPriceTable coach={carriage.coach} />
            </div>
            <div className={cn('seats')}>
                <div className={cn('details-info')}>
                    <span>{t('place-selection.seat-map.carriage-plan.occupied-places-number', { number: availableSeats.length })}</span>
                </div>
                <InteractiveCarriageMap classType={carriage.coach.class_type} seats={carriage.seats} />
            </div>
        </div>
    );
};
