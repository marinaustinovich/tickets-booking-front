import React from 'react';
import { classname } from 'utils';
import { TrainInfo } from 'types';

import GeneralTrainInfoBlock from './general-train-info-block/general-train-info-block';
import { ScheduleInfoBlock } from './schedule-info-block';
import { SeatInfoBlock } from './seat-info-block';

import './train-item.scss';


type Props = {
    train: TrainInfo;
};
const cn = classname('train-item');

export const TrainItem = ({ train }: Props) => {
    const { departure, arrival, available_seats_info    } = train;
    const priceInfo = {...departure.price_info, ...arrival?.price_info}

    return (
        <div className={cn()}>
            <GeneralTrainInfoBlock from={departure.from} to={departure.to} train={departure.train}/>
            <ScheduleInfoBlock departure={departure} arrival={arrival} />
            <SeatInfoBlock availableSeatsInfo={available_seats_info} priceInfo={priceInfo} departure={departure} />
        </div>
    );
};
