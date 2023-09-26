import React from 'react';
import { classname } from 'utils';
import { DepartureInfo } from 'types';
import { LeftArrowYellowIcon, RightArrowYellowIcon } from 'icons';

import './schedule-info-block.scss';
import { ScheduleRow } from 'components/common';

type ScheduleInfoBlockProps = {
    departure: DepartureInfo;
    arrival?: DepartureInfo;
};

const cn = classname('schedule-info-block');

export const ScheduleInfoBlock = ({ departure, arrival }: ScheduleInfoBlockProps) => {
    const { from: fromDeparture, to: toDeparture, duration: durationDeparture } = departure;
    const { from: fromArrival, to: toArrival, duration: durationArrival } = arrival || {};

    return (
        <div className={cn()}>
            <ScheduleRow from={fromDeparture} to={toDeparture} duration={durationDeparture} Icon={LeftArrowYellowIcon} />
            {arrival && <ScheduleRow from={fromArrival} to={toArrival} duration={durationArrival} Icon={RightArrowYellowIcon} />}
        </div>
    );
};
