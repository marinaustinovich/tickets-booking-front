import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store';
import { carriagesDetailsSelector } from 'store/ticket';
import { classname } from 'utils';
import { CarriageSelectionButtons } from './carriage-selection-buttons';
import { SeatMap } from './seat-map';

import './carriage-type.scss';

type Props = { directionId: string };

const cn = classname('carriage-type');

export const CarriageType = ({ directionId }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.carriage-type';
    const carriages = useAppSelector(carriagesDetailsSelector);
    console.log(carriages);

    return (
        <div className={cn()}>
            <h4 className={cn('title')}>{t(`${locale}.title`)}</h4>
            <CarriageSelectionButtons directionId={directionId} />
            {carriages && carriages.length > 0 && <SeatMap carriages={carriages} />}
        </div>
    );
};
