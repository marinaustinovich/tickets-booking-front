import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { commonActions } from 'store/common/slice';
import { TrainSeatsSelector } from './train-seats-selector';
import { useAppDispatch, useAppSelector } from 'store';
import { selectedTrainSelector } from 'store/route';
import { selectedSeatsSelector, ticketsCountSelector } from 'store/ticket';
import { classname, compareSelectedSeatsAndTicketCount } from 'utils';
import { Button } from 'components';

import './place-selection.scss';

const cn = classname('place-selection');

export const PlaceSelection = () => {
    const { t } = useTranslation('global');
    const locale = 'place-selection';
    const { index } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const indexNumber = Number(index);

    const train = useAppSelector(selectedTrainSelector(indexNumber));
    const ticketsCount = useAppSelector(ticketsCountSelector);
    const selectedSeats = useAppSelector(selectedSeatsSelector);

    const handleNextStep = useCallback(() => {
        if (Object.keys(ticketsCount).length === 0) {
            dispatch(commonActions.setModalProps({ isVisible: true, type: 'error', content: t(`${locale}.notification.count-error`) }));
            return;
        }
    
        if (!compareSelectedSeatsAndTicketCount(selectedSeats, ticketsCount)) {
            dispatch(commonActions.setModalProps({ isVisible: true, type: 'error', content: t(`${locale}.notification.compare-error`) }));
            return;
        }
    
        navigate('/tickets/passenger');
    }, [dispatch, t, navigate, ticketsCount, selectedSeats]);
    

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
