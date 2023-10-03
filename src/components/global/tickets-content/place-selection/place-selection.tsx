import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TrainSeatsSelector } from './train-details-paper';
import { useAppSelector } from 'store';
import { selectedTrainSelector } from 'store/route';
import { classname } from 'utils';

import './place-selection.scss';

const cn = classname('place-selection');

export const PlaceSelection = () => {
    const { t } = useTranslation('global');
    const { index } = useParams();
    const indexNumber = Number(index);

    const train = useAppSelector(selectedTrainSelector(indexNumber));
    console.log(train);

    return (
        <div className={cn()}>
            <h3>{t('place-selection.title')}</h3>
            <TrainSeatsSelector isDeparture={true} train={train} />
            {train.arrival && <TrainSeatsSelector train={train} />}
        </div>
    );
};
