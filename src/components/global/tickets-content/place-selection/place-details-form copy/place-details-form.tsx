import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';

import './place-details-form.scss';

const cn = classname('place-details-form');

export const PlaceDetailsForm = () => {
    const { t } = useTranslation('global');

    return (
        <div className={cn()}>
            <h3>{t('place-selection.title')}</h3>
        </div>
    );
};
