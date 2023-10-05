import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common';
import { LeftArrowYellowIcon, RightArrowYellowIcon } from 'icons';
import { classname } from 'utils';
import { TrainInfo } from 'types';
import { TrainDetailsBlock } from '../train-details-block';
import { PlaceDetailsForm } from '../place-details-form';

import './train-seats-selector.scss';

type Props = {
    isDeparture?: boolean;
    train: TrainInfo;
    directionId: string;
};

const cn = classname('train-seats-selector');

export const TrainSeatsSelector = ({ isDeparture, train, directionId }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn()}>
            <div className={cn('actions')}>
                {isDeparture ? <LeftArrowYellowIcon /> : <RightArrowYellowIcon />}
                <Button type='button' size='large' view='default-white'>
                    {t('place-selection.choose-button-label')}
                </Button>
            </div>
            <TrainDetailsBlock isDeparture={isDeparture} departure={train.departure} arrival={train.arrival} />
            <PlaceDetailsForm directionId={directionId} />
        </div>
    );
};
