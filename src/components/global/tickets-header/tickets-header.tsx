import React, { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Header } from '../header';
import { TravelForm } from 'components';
import { StepsEnum } from 'enums/steps-enum';
import { ArrowRightThinIcon } from 'icons';

import './tickets-header.scss';

type StepProps = {
    label: string;
    index: number;
    className?: string;
    isLast: boolean;
};
const cn = classname('tickets-header');

const Step = ({ label, index, className, isLast }: StepProps) => (
    <div className={cn('step', [className])}>
        <span>{index}</span>
        <h3>{label}</h3>
        {!isLast && <ArrowRightThinIcon />}
    </div>
);

export const TicketsHeader = () => {
    const location = useLocation();
    const { t } = useTranslation('global');
    const hasPassengerSegment = useMemo(() => location.pathname.includes('passenger'), [location]);
    const hasPaymentSegment = useMemo(() => location.pathname.includes('payment'), [location]);


    const getCurrentStepClass = useCallback(
        (index: number) => {
            if (index === 0 || (index === 1 && hasPassengerSegment) || (index === 2 && hasPaymentSegment)) {
                return 'current-step';
            }
            return '';
        },
        [hasPassengerSegment, hasPaymentSegment],
    );

    return (
        <div className={cn()}>
            <Header />
            <div className={cn('form-wrapper')}>
                <TravelForm isRow={true} />
            </div>
            <div className={cn('steps')}>
                {Object.values(StepsEnum).map((step, index) => (
                    <Step
                        label={t(`tickets.header.${step}`)}
                        index={index + 1}
                        key={index}
                        isLast={index === Object.keys(StepsEnum).length - 1}
                        className={getCurrentStepClass(index)}
                    />
                ))}
            </div>
        </div>
    );
};
