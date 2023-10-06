import React, { useCallback, useState } from 'react';
import { SeatMapHeader, SeatPriceTable } from 'components';
import { NumberCarriageBlock } from '../number-carriage-block';
import { classname } from 'utils';
import { CarriagesDetailsInfo } from 'types/';
import { useAppSelector } from 'store';
import { selectedCarriageSelector } from 'store/ticket';

import './seat-map.scss';

type Props = { carriages: CarriagesDetailsInfo };

const cn = classname('seat-map');

export const SeatMap = ({ carriages }: Props) => {
    const [index, setIndex] = useState<number>(0);
    const carriage = useAppSelector(selectedCarriageSelector(index));
    console.log(carriage);

    const handleNumberClick = useCallback((id: string, index: number) => {
        console.log(id, index);
        setIndex(index);
    }, []);

    return (
        <div className={cn()}>
            <SeatMapHeader carriages={carriages} onNumberClick={handleNumberClick} />
            <div className={cn('carriage-details')}>
                <NumberCarriageBlock numberCarriage={index} />
                <SeatPriceTable coach={carriage.coach} />
            </div>
        </div>
    );
};
