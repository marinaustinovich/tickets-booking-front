import React from 'react';
import { useTranslation } from 'react-i18next';

import { classname } from 'utils';
import { CarriageSelectionButtons } from './carriage-selection-buttons';

import './carriage-type.scss';


type Props = { directionId: string };

const cn = classname('carriage-type');

export const CarriageType = ({ directionId }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.car-type';

    return (
        <div className={cn()}>
            <h4 className={cn('title')}>{t(`${locale}.title`)}</h4>
            <CarriageSelectionButtons directionId={directionId} />
        </div>
    );
};
