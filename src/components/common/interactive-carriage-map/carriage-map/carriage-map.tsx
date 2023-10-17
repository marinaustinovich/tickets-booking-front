import React, { useCallback, useState } from 'react';
import { classname, formatIndex } from 'utils';
import { AvailableSeatInfo, ClickableArea } from 'types';

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
    const [activeAreas, setActiveAreas] = useState<ClickableArea[]>([]);
    const handleClick = useCallback((area: ClickableArea, available: boolean) => {
        if (available) return;
        setActiveAreas(prevActiveAreas => {
            if (prevActiveAreas.some(activeArea => activeArea.index === area.index)) {
                return prevActiveAreas.filter(activeArea => activeArea.index !== area.index);
            } else {
                return [...prevActiveAreas, area];
            }
        });
    }, []);

    return (
        <div className={cn()}>
            <img src={urlMap} alt='Carriage Map' />
            {areas.map(area => {
                if (area.index === 0) {
                    area.index = formatIndex(carriageNumber + 1);

                    return <Area area={area} key={area.index} className='area-carriage-number'/>;
                }

                const areaData = seats.find(seat => seat.index === area.index);
                const isActive = activeAreas.some(activeArea => activeArea.index === area.index);
                const isAvailable = areaData && areaData.available;

                return <Area area={area} isActive={isActive} isAvailable={!!isAvailable} handleClick={handleClick} key={area.index} />;
            })}
        </div>
    );
};
