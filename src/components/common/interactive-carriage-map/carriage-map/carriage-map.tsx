import React, { useCallback, useState } from 'react';
import { classname } from 'utils';
import { AvailableSeatInfo, ClickableArea } from 'types';

import './carriage-map.scss';

type Props = {
    seats: AvailableSeatInfo[];
    areas: ClickableArea[];
    urlMap: string;
};

type AreaProps = {
    area: ClickableArea;
    isActive: boolean;
    isAvailable: boolean;
    handleClick: (area: ClickableArea, available: boolean) => void;
};

const cn = classname('carriage-map');

const Area = ({ area, isActive, isAvailable, handleClick }: AreaProps) => (
    <div
        className={cn('area', { available: isAvailable, active: isActive })}
        style={{
            top: `${area.y}%`,
            left: `${area.x}%`,
            width: `${area.width}%`,
            height: `${area.height}%`,
        }}
        onClick={() => handleClick(area, !!isAvailable)}
    >
        {area.index}
    </div>
);

export const CarriageMap = ({ seats, areas, urlMap }: Props) => {
    const [activeAreas, setActiveAreas] = useState<ClickableArea[]>([]);
    const handleClick = useCallback((area: ClickableArea, available: boolean) => {
        console.log(area, available, activeAreas);
        if (available) return;
        setActiveAreas(prevActiveAreas => {
            if (prevActiveAreas.some(activeArea => activeArea.index === area.index)) {
                return prevActiveAreas.filter(activeArea => activeArea.index !== area.index);
            } else {
                return [...prevActiveAreas, area];
            }
        });
    }, [activeAreas]);

    return (
        <div className={cn()}>
            <img src={urlMap} alt='Carriage Map' />
            {areas.map(area => {
                const areaData = seats.find(seat => seat.index === area.index);
                const isActive = activeAreas.some(activeArea => activeArea.index === area.index);
                const isAvailable = areaData && areaData.available;

                return <Area area={area} isActive={isActive} isAvailable={!!isAvailable} handleClick={handleClick} key={area.index} />;
            })}
        </div>
    );
};
