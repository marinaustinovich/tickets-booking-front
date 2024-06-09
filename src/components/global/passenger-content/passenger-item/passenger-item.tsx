import React, { useMemo, useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { Button, Paper } from 'components';
import { PassengerItemHeader } from './passenger-item-header';
import { PassengerForm } from './passenger-form';
import { useAppSelector } from 'store';
import { passengersDataSelector } from 'store/ticket';
import { AgeEnum, DocumentTypeEnum, GenderEnum } from 'enums';
import { PassengerFormState } from 'types';

import './passenger-item.scss';

type Props = {
    passengerNumber: number;
    onDelete: () => void;
};

const cn = classname('passenger-item');

export const PassengerItem = ({ passengerNumber, onDelete }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.paper';
    const prefix = useMemo(() => `passenger-${passengerNumber}`, [passengerNumber]);
    const [isShowPassengerForm, setIsShowPassengerForm] = useState<boolean>(false);

    const passengerFormData = useAppSelector(passengersDataSelector(prefix));

    console.log('prefix', passengerFormData);

    const initialValues: Partial<Record<string, PassengerFormState>> = useMemo(() => {
        return {
            [prefix]: {
                [prefix]: {
                    isAdult: AgeEnum.ADULT,
                    gender: GenderEnum.MALE,
                    firsName: '',
                    lastName: '',
                    birthday: '',
                    documentType: DocumentTypeEnum.PASSPORT,
                    documentData: '',
                    documentNumber: '',
                    documentSeries: '',
                    limitedMobility: false,
                },
            },
        };
    }, []);

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

    const body = useMemo(
        () => (isShowPassengerForm ? <PassengerForm prefix={prefix} initialValues={initialValues} /> : null),
        [passengerNumber, isShowPassengerForm, prefix],
    );

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
