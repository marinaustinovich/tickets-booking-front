import React, { useCallback, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { InteractiveCarriageMap, NumberCarriageBlock, SeatMapHeader, SeatPriceTable } from 'components';
import { calculateTotalPrice, classname } from 'utils';
import { CarriagesDetailsInfo } from 'types';
import { CarriageTypesEnum } from 'enums';
import { RubIcon } from 'icons';
import { useAppSelector } from 'store';
import { selectedSeatsSelector } from 'store/ticket';

import './seat-map.scss';

type Props = {
    carriages: CarriagesDetailsInfo;
    selectedClassType: CarriageTypesEnum;
};

const cn = classname('seat-map');

export const SeatMap = ({ carriages, selectedClassType }: Props) => {
    const selectedSeats = useAppSelector(selectedSeatsSelector);
    const { t } = useTranslation('global');
    const [index, setIndex] = useState<number>(0);

    const selectedCarriage = useMemo(() => carriages[index], [carriages, index]);
    const availableSeats = useMemo(() => selectedCarriage.seats.filter(seat => seat.available), [selectedCarriage.seats]);

    const handleCarriageNumberClick = useCallback((index: number) => {
        setIndex(index);
    }, []);
   
    const totalPrice = useMemo(() => calculateTotalPrice(selectedSeats, selectedCarriage.coach), [selectedSeats, selectedCarriage]);


    return (
        <div className={cn()}>
            <SeatMapHeader carriages={carriages} onNumberClick={handleCarriageNumberClick} selectedCarriage={index}/>
            <div className={cn('carriage-details')}>
                <NumberCarriageBlock carriageNumber={index} />
                <SeatPriceTable coach={selectedCarriage.coach} />
            </div>
            <div className={cn('seats')}>
                <div className={cn('details-info')}>
                    <span>{t('place-selection.seat-map.carriage-plan.occupied-places-number', { number: availableSeats.length })}</span>
                </div>
                <InteractiveCarriageMap carriageNumber={index} classType={selectedClassType} seats={selectedCarriage.seats} />
            </div>
            <div className={cn('total')}>
                <span>{totalPrice}</span>
                <RubIcon />
            </div>
        </div>
    );
};
