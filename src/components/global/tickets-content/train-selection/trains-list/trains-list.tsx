import React from 'react';

import { classname } from 'utils';

import './trains-list.scss';
import { TrainInfo } from 'types';
import { useTranslation } from 'react-i18next';
import { TrainItem } from '../train-item';

type Props = {
    trains: TrainInfo[] | [];
};
const cn = classname('trains-list');

export const TrainsList = ({ trains }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn()}>
            <div className={cn('total-info')}>
                <div>
                    {t('tickets.trains.found-count')}: {trains?.length ?? 0}
                </div>
            </div>
            {trains.map(train => (
                <TrainItem train={train} key={train.departure.train._id}/>
            ))}
        </div>
    );
};

