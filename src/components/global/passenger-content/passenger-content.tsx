import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { PassengerItem } from './passenger-item';
import { useAppSelector } from 'store';
import { selectedSeatsSelector } from 'store/ticket';
import { Button, Main } from 'components';
import { AddPassengerBlock } from './add-passenger-block';

import './passenger-content.scss';

const cn = classname('passenger-content');

export const PassengerContent = () => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content';
    const seatsCount = useAppSelector(selectedSeatsSelector);
    const [isDisabledNextButton, setIsDisabledNextButton] = useState<boolean>(true);
    const [passengerNumbers, setPassengerNumbers] = useState<number[]>(seatsCount.map((_, index) => index + 1));

    const handleAddPassengerClick = useCallback(() => {
        const newIndex = passengerNumbers[passengerNumbers.length - 1] + 1;
        setPassengerNumbers(prevPassengerNumbers => [...prevPassengerNumbers, newIndex]);
    }, [passengerNumbers]);

    const handleDeletePassengerClick = useCallback((passengerNumberToDelete: number) => {
        setPassengerNumbers(prevPassengerNumbers => prevPassengerNumbers.filter(number => number !== passengerNumberToDelete));
    }, []);

    const handleNextStep = useCallback(() => {
        console.log('payment');
        // setIsDisabledNextButton(true)
        // navigate('/tickets/payment');
    }, []);
    console.log(passengerNumbers);
    return (
        <Main>
            <div>Trip Details</div>
            <div className={cn('passenger-list')}>
                {passengerNumbers.map(passengerNumber => (
                    <PassengerItem key={passengerNumber} passengerNumber={passengerNumber} onDelete={() => handleDeletePassengerClick(passengerNumber)} />
                ))}
                <AddPassengerBlock onAddPassenger={handleAddPassengerClick} />
                <Button view='primary-white' size='large' onClick={handleNextStep} disabled={isDisabledNextButton}>
                    {t(`${locale}.next-button-label`)}
                </Button>
            </div>
        </Main>
    );
};
