import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'store';
import { CarriageTypesEnum } from 'enums';
import { IconButton } from 'components/common';
import { CoupeIcon, ReservedSeatIcon, SedentaryIcon, StarIcon } from 'icons';
import { classname, formatType } from 'utils';
import { fetchCarriagesDetailsThunk } from 'store/ticket';
import { ticketsActions } from 'store/ticket/slice';

import './carriage-selection-buttons.scss';

type Props = {
    directionId: string;
    showSelectedType: (activeType: CarriageTypesEnum | null) => void;
};

const cn = classname('carriage-selection-buttons');

export const CarriageSelectionButtons = ({ directionId, showSelectedType }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.carriage-type';
    const dispatch = useAppDispatch();

    const [activeType, setActiveType] = useState<CarriageTypesEnum | null>(null);

    const handleButtonClick = useCallback(
        (type: CarriageTypesEnum) => {
            setActiveType(prevType => {
                const newActiveType = prevType === type ? null : type;
                showSelectedType(newActiveType);

                return newActiveType;
            });
            // TODO: пока сервер не возвращает массив вагонов, не работает фильтр
            dispatch(fetchCarriagesDetailsThunk({ id: directionId, filters: {} }));
            dispatch(ticketsActions.setSelectedSeats([]));
        },
        [dispatch, directionId, showSelectedType],
    );

    // TODO: пока сервер не возвращает массив вагонов, не работает фильтр
    // useEffect(() => {
    // if (activeType) {
    //     const filters = { [`have${formatType(activeType)}Class`]: true };
    //     console.log(`have${formatType(activeType)}Class`)
    //     dispatch(fetchCarriagesDetailsThunk({ id: directionId, filters }));
    // } else {
    //     dispatch(fetchCarriagesDetailsThunk({ id: directionId, filters: {} }));
    // }
    // }, [dispatch, activeType, directionId]);

    const options = useMemo(() => {
        return [
            { label: t(`${locale}.${CarriageTypesEnum.FOURTH}`), icon: SedentaryIcon, type: CarriageTypesEnum.FOURTH },
            { label: t(`${locale}.${CarriageTypesEnum.THIRD}`), icon: ReservedSeatIcon, type: CarriageTypesEnum.THIRD },
            { label: t(`${locale}.${CarriageTypesEnum.SECOND}`), icon: CoupeIcon, type: CarriageTypesEnum.SECOND },
            { label: t(`${locale}.${CarriageTypesEnum.FIRST}`), icon: StarIcon, type: CarriageTypesEnum.FIRST },
        ];
    }, [t]);

    return (
        <div className={cn()}>
            {options.map(option => (
                <IconButton
                    key={option.label}
                    Icon={option.icon}
                    onClick={() => handleButtonClick(option.type)}
                    size='max'
                    label={option.label}
                    className={activeType === option.type ? cn('focus') : ''}
                />
            ))}
        </div>
    );
};
