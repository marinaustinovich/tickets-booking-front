import React from 'react';

import { capitalizeHyphenatedString, classname } from 'utils';
import { DepartureOrArrivalInfo, Train } from 'types';
import { LeftArrowIcon, TrainIcon, TrainYellowIcon } from 'icons';

import './general-train-info-block.scss';

type Props = {
    train: Train;
    from: DepartureOrArrivalInfo;
    to: DepartureOrArrivalInfo;
    isRow?: boolean;
};
const cn = classname('general-train-info-block');

export const GeneralTrainInfoBlock = ({ train, from, to, isRow }: Props) => {
    return (
        <div className={cn('', { row: isRow })}>
            <div className={cn('avatar')}>
                {isRow ? <TrainYellowIcon /> : <TrainIcon />}
            </div>
            <div>
                <div className={cn('train-name')}>{train.name}</div>
                <div>
                    <div className={cn('from')}>
                        <span>{capitalizeHyphenatedString(from.city.name)}</span>
                        <LeftArrowIcon />
                    </div>
                    <div className={cn('to')}>{capitalizeHyphenatedString(to.city.name)}</div>
                </div>
            </div>
        </div>
    );
};
