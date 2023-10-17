import React, { useCallback, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store';
import { carriagesDetailsSelector } from 'store/ticket';
import { classname } from 'utils';
import { CarriageSelectionButtons } from './carriage-selection-buttons';
import { SeatMap } from './seat-map';

import './carriage-type.scss';
import { CarriageTypesEnum } from 'enums';

type Props = { directionId: string };

const cn = classname('carriage-type');

export const CarriageType = ({ directionId }: Props) => {
    const [selectedCarriageType, setActiveType] = useState<CarriageTypesEnum | null>(null);
    const { t } = useTranslation('global');
    const locale = 'place-selection.carriage-type';
    const carriages = useAppSelector(carriagesDetailsSelector);

    const filteredCarriages = useMemo(() => {
        if (!selectedCarriageType) {
            return [];
        }
        return carriages.filter(carriage => carriage.coach.class_type === selectedCarriageType);
    }, [selectedCarriageType, carriages]);

    const handleSelectCarriageType = useCallback((carriageType: CarriageTypesEnum | null) => {
        setActiveType(carriageType);
    }, []);

    const isShowSeatMap = carriages && carriages.length > 0 && selectedCarriageType && filteredCarriages.length > 0;

    return (
        <div className={cn()}>
            <h4 className={cn('title')}>{t(`${locale}.title`)}</h4>
            <CarriageSelectionButtons directionId={directionId} showSelectedType={handleSelectCarriageType} />
            {isShowSeatMap && <SeatMap carriages={filteredCarriages} selectedClassType={selectedCarriageType}/>}
        </div>
    );
};
