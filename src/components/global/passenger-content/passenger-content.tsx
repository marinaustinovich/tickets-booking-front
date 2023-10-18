import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';

import { Main } from 'components';

import './passenger-content.scss';
import { PassengerItem } from './passenger-item';



const cn = classname('passenger-content');

export const PassengerContent = () => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.paper';

    return (
        <Main>
            <div>Trip Details</div>
            <PassengerItem />
        </Main>
    );
};
