import React, { useCallback, useState, useEffect } from 'react';
import { classname, formatIndex } from 'utils';
import { AvailableSeatInfo, ClickableArea } from 'types';
import { useAppDispatch } from 'store';
import { ticketsActions } from 'store/ticket/slice';

import './carriage-map.scss';

type Props = {
    carriageNumber: number;
    seats: AvailableSeatInfo[];
    areas: ClickableArea[];
    urlMap: string;
};

type AreaProps = {
    area: ClickableArea;
    isActive?: boolean;
    isAvailable?: boolean;
    className?: string;
    handleClick?: (area: ClickableArea, available: boolean) => void;
};

const cn = classname('carriage-map');

const Area = ({ area, isActive, isAvailable, handleClick, className }: AreaProps) => (
    <div
        className={cn('area', { available: isAvailable, active: isActive }, [className])}
        style={{
            top: `${area.y}%`,
            left: `${area.x}%`,
            width: `${area.width}%`,
            height: `${area.height}%`,
        }}
        onClick={handleClick && isAvailable !== undefined ? () => handleClick(area, isAvailable) : undefined}
    >
        {area.index}
    </div>
);

export const CarriageMap = ({ seats, areas, urlMap, carriageNumber }: Props) => {
    const [activeAreaIndexes, setActiveAreaIndexes] = useState<(number | string)[]>([]);
    const dispatch = useAppDispatch();

    const handleClick = useCallback((area: ClickableArea, available: boolean) => {
        if (available) return;

        if (area.index === 0 || typeof area.index !== 'number') {
            return;
        }

        setActiveAreaIndexes(prevActiveAreaIndexes =>
            prevActiveAreaIndexes.includes(area.index)
                ? prevActiveAreaIndexes.filter(activeAreaIndex => activeAreaIndex !== area.index)
                : [...prevActiveAreaIndexes, area.index],
        );
    }, []);

    useEffect(() => {
        dispatch(ticketsActions.setSelectedSeats(activeAreaIndexes.map(index => Number(index))));
    }, [dispatch, activeAreaIndexes]);

    return (
        <div className={cn()}>
            <img src={urlMap} alt='Carriage Map' />
            {areas.map(area => {
                if (area.index === 0) {
                    area.index = formatIndex(carriageNumber + 1);

                    return <Area area={area} key={area.index} className='area-carriage-number' />;
                }

                const areaData = seats.find(seat => seat.index === area.index);
                const isActive = activeAreaIndexes.includes(area.index);
                const isAvailable = areaData && areaData.available;

                return <Area area={area} isActive={isActive} isAvailable={!!isAvailable} handleClick={handleClick} key={area.index} />;
            })}
        </div>
    );
};
