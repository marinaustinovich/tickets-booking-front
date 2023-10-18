import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { LeftArrowYellowIcon, RightArrowYellowIcon } from 'icons';
import { classname } from 'utils';
import { TrainInfo } from 'types';
import { TrainDetailsBlock } from '../train-details-block';
import { TicketsCountForm } from '../tickets-count-form';
import { CarriageType } from '../carriage-type';

import './train-seats-selector.scss';

type Props = {
    isDeparture?: boolean;
    train: TrainInfo;
    directionId: string;
};

const cn = classname('train-seats-selector');

export const TrainSeatsSelector = ({ isDeparture, train, directionId }: Props) => {
    const { t } = useTranslation('global');
    const navigate = useNavigate();

    const handleButtonClick = useCallback(() => navigate('/tickets/train'), [navigate]);

    return (
        <div className={cn()}>
            <div className={cn('actions')}>
                {isDeparture ? <LeftArrowYellowIcon /> : <RightArrowYellowIcon />}
                <Button type='button' size='large' view='default-white' onClick={handleButtonClick}>
                    {t('place-selection.choose-button-label')}
                </Button>
            </div>
            <TrainDetailsBlock isDeparture={isDeparture} departure={train.departure} arrival={train.arrival} />
            <TicketsCountForm />
            <CarriageType directionId={directionId} />
        </div>
    );
};
