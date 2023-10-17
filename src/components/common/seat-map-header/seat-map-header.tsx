import React from 'react';
import { useTranslation } from 'react-i18next';

import { classname, formatIndex } from 'utils';
import { CarriagesDetailsInfo } from 'types/';

import './seat-map-header.scss';

type Props = {
    carriages: CarriagesDetailsInfo;
    onNumberClick: (index: number) => void;
};

const cn = classname('seat-map-header');

export const SeatMapHeader = ({ carriages, onNumberClick }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.seat-map.header';

    return (
        <div className={cn('')}>
            <div className={cn('numbers')}>
                <span className={cn('numbers-label')}>{t(`${locale}.carriage-numbers`)}</span>
                {carriages.map((carriage, index) => (
                    <span key={carriage.coach._id} className={cn('number')} onClick={() => onNumberClick(index + 1)}>
                        {formatIndex(index + 1)}
                    </span>
                ))}
            </div>
            <span className={cn('info')}  >
                {t(`${locale}.info`)}
            </span>
        </div>
    );
};
