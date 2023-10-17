import React from 'react';
import { classname, convertToPercentage } from 'utils';
import { CarriageTypesEnum } from 'enums';
import { AvailableSeatInfo } from 'types';
import { CarriageMap } from './carriage-map';
import { ClickableAreasMap } from 'constants/clickableAreasData';

import './interactive-carriage-map.scss';

type Props = {
    carriageNumber: number;
    classType: CarriageTypesEnum;
    seats: AvailableSeatInfo[];
};

const cn = classname('interactive-carriage-map');

export const InteractiveCarriageMap = ({ classType, seats, carriageNumber }: Props) => (
    <div className={cn()}>
        {classType === CarriageTypesEnum.FIRST && (
            <CarriageMap
                carriageNumber={carriageNumber}
                seats={seats}
                areas={convertToPercentage(ClickableAreasMap[CarriageTypesEnum.FIRST])}
                urlMap='/image/first-class-carriage.png'
            />
        )}
        {classType === CarriageTypesEnum.SECOND && (
            <CarriageMap
                carriageNumber={carriageNumber}
                seats={seats}
                areas={convertToPercentage(ClickableAreasMap[CarriageTypesEnum.SECOND])}
                urlMap='/image/second-class-carriage.png'
            />
        )}
        {classType === CarriageTypesEnum.THIRD && (
            <CarriageMap
                carriageNumber={carriageNumber}
                seats={seats}
                areas={convertToPercentage(ClickableAreasMap[CarriageTypesEnum.THIRD])}
                urlMap='/image/third-class-carriage.png'
            />
        )}
        {classType === CarriageTypesEnum.FOURTH && (
            <CarriageMap
                carriageNumber={carriageNumber}
                seats={seats}
                areas={convertToPercentage(ClickableAreasMap[CarriageTypesEnum.FOURTH])}
                urlMap='/image/fourth-class-carriage.png'
            />
        )}
    </div>
);
