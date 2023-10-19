import React, { useMemo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Button, Paper } from 'components';
import { PassengerItemHeader } from './passenger-item-header';
import { PassengerForm } from './passenger-form';

import './passenger-item.scss';

type Props = {
    passengerNumber: number;
    onDelete: () => void;
};

const cn = classname('passenger-item');

export const PassengerItem = ({ passengerNumber, onDelete }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.paper';

    const [isShowPassengerForm, setIsShowPassengerForm] = useState<boolean>(false);

    const handleShowPassengerForm = useCallback(() => {
        setIsShowPassengerForm(prev => !prev);
    }, []);

    const header = useMemo(
        () => (
            <PassengerItemHeader
                number={passengerNumber}
                showPassengerForm={handleShowPassengerForm}
                isShowPassengerForm={isShowPassengerForm}
                onDelete={onDelete}
            />
        ),
        [handleShowPassengerForm, isShowPassengerForm, onDelete, passengerNumber],
    );

    const body = useMemo(() => (isShowPassengerForm ? <PassengerForm passengerNumber={1} /> : null), [isShowPassengerForm]);

    const actions = useMemo(
        () =>
            isShowPassengerForm ? (
                <div className={cn('actions')}>
                    <Button size='large-narrow' view='default-white'>
                        {t(`${locale}.action-button-label`)}
                    </Button>
                </div>
            ) : null,
        [t, isShowPassengerForm],
    );

    return <Paper header={header} body={body} footer={actions} />;
};
