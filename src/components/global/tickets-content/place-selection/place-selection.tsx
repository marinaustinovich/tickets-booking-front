import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { commonActions } from 'store/common/slice';
import { TrainSeatsSelector } from './train-seats-selector';
import { useAppDispatch, useAppSelector } from 'store';
import { selectedTrainSelector } from 'store/route';
import { classname } from 'utils';
import { Button } from 'components';

import './place-selection.scss';

const cn = classname('place-selection');

export const PlaceSelection = () => {
    const { t } = useTranslation('global');
    const locale = 'place-selection';
    const { index } = useParams();
    const dispatch = useAppDispatch();
    const indexNumber = Number(index);

    const train = useAppSelector(selectedTrainSelector(indexNumber));

    const handleNextStep = useCallback(() => {
        console.log('next');
        dispatch(commonActions.setModalProps({ isVisible: true, type: 'error', content: t(`${locale}.notification.error`) }));
    }, [dispatch, t]);

    return (
        <div className={cn()}>
            <h3>{t(`${locale}.title`)}</h3>
            <TrainSeatsSelector isDeparture={true} train={train} directionId={train.departure._id} />
            {train.arrival && <TrainSeatsSelector train={train} directionId={train.arrival._id} />}
            <Button view='primary-white' size='large' onClick={handleNextStep}>
                {t(`${locale}.next-button-label`)}
            </Button>
        </div>
    );
};
