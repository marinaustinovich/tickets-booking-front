import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common';
import { LeftArrowYellowIcon, RightArrowYellowIcon } from 'icons';
import { classname } from 'utils';
import { TrainInfo } from 'types';
import { TrainDetailsBlock } from '../train-details-block';

import './train-seats-selector.scss';
import { PlaceDetailsForm } from '../place-details-form';

type Props = {
    isDeparture?: boolean;
    train: TrainInfo;
};

const cn = classname('train-seats-selector');

export const TrainSeatsSelector = ({ isDeparture, train }: Props) => {
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
            <PlaceDetailsForm />
        </div>
    );
};
