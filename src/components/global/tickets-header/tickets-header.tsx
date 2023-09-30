import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Header } from '../header';
import { TravelForm } from 'components';
import { StepsEnum } from 'enums/stepsEnum';

import './tickets-header.scss';
import { ArrowRightThin } from 'icons';

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
        {(!className && !isLast) && <ArrowRightThin />}
    </div>
);

export const TicketsHeader = () => {
    const { t } = useTranslation('global');

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
                        className={index === 0 ? 'current-step' : ''}
                    />
                ))}
            </div>
        </div>
    );
};
