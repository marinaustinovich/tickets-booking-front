import React, { useMemo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Paper } from 'components';
import { PassengerItemHeader } from './passenger-item-header';

import './passenger-item.scss';
import { PassengerForm } from './passenger-form';

const cn = classname('passenger-item');

export const PassengerItem = () => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.paper';

    const [isShowPassengerForm, setIsShowPassengerForm] = useState<boolean>(false);

    const handleShowPassengerForm = useCallback(() => {
        setIsShowPassengerForm(prev => !prev);
    }, []);

    const header = useMemo(
        () => <PassengerItemHeader number={1} showPassengerForm={handleShowPassengerForm} isShowPassengerForm={isShowPassengerForm} />,
        [handleShowPassengerForm, isShowPassengerForm],
    );

    const body = useMemo(() => <PassengerForm passengerNumber={1} />, []);

    return <Paper header={header} body={body} />;
};
