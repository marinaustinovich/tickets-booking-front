import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeneralTrainInfoBlock, ScheduleRow, Timestamp } from 'components';
import { classname } from 'utils';
import { DepartureInfo } from 'types';
import { LeftArrowYellowIcon, RightArrowYellowIcon, WatchIcon } from 'icons';

import './train-details-block.scss';

type Props = {
    departure: DepartureInfo;
    isDeparture?: boolean;
    arrival?: DepartureInfo;
};

const cn = classname('train-details-block');

export const TrainDetailsBlock = ({ departure, isDeparture, arrival }: Props) => {
    const { t } = useTranslation('common');
    const { from: fromDeparture, to: toDeparture, duration: durationDeparture } = departure;
    const { from: fromArrival, to: toArrival, duration: durationArrival = 0 } = arrival || {};
    const duration = isDeparture ? durationDeparture : durationArrival;

    return (
        <div className={cn()}>
            <GeneralTrainInfoBlock from={departure.from} to={departure.to} train={departure.train} isRow={true} />
            <div className={cn('schedule')}>
                {isDeparture && <ScheduleRow from={fromDeparture} to={toDeparture} duration={durationDeparture} Icon={LeftArrowYellowIcon} />}
                {!isDeparture && <ScheduleRow from={fromArrival} to={toArrival} duration={durationArrival} Icon={RightArrowYellowIcon} />}
            </div>
            <div className={cn('time')}>
                <WatchIcon />
                <Timestamp timestamp={duration} language={t('commons.language')} />
            </div>
        </div>
    );
};
