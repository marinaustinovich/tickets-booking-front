import React, { useMemo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'store';
import { CarriageTypesEnum } from 'enums';
import { IconButton } from 'components/common';
import { CoupeIcon, ReservedSeatIcon, SedentaryIcon, StarIcon } from 'icons';
import { classname } from 'utils';
import { fetchCarriagesDetailsThunk } from 'store/ticket';

import './carriage-selection-buttons.scss';

type Props = {
    directionId: string;
};

const cn = classname('carriage-selection-buttons');

export const CarriageSelectionButtons = ({ directionId }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.car-type';
    const dispatch = useAppDispatch();

    const [activeType, setActiveType] = useState<CarriageTypesEnum | null>(null);

    const handleButtonClick = useCallback(
        (type: CarriageTypesEnum) => {
            setActiveType((prevType) => (prevType === type ? null : type));

            const filters = { [`have${type}Class`]: activeType !== type };
            dispatch(fetchCarriagesDetailsThunk({ id: directionId, filters }));
        },
        [dispatch, directionId, activeType]
    );

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
