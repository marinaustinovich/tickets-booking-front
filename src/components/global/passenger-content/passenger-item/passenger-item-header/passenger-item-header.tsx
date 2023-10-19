import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { MinusCircleIcon, CloseIcon, PlusCircleIcon } from 'icons';
import { IconButton } from 'components';

import './passenger-item-header.scss';

type Props = {
    number: number;
    showPassengerForm: () => void;
    onDelete: () => void;
    isShowPassengerForm: boolean;
};

const cn = classname('passenger-item-header');

export const PassengerItemHeader = ({ number, showPassengerForm, isShowPassengerForm, onDelete }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content.paper';

    const handleDeleteClick = useCallback(() => {
        onDelete()
    }, [onDelete]);

    return (
        <div className={cn()}>
            <div className={cn('title')}>
                <IconButton size='midi' view='primary' Icon={isShowPassengerForm ? MinusCircleIcon : PlusCircleIcon} onClick={showPassengerForm} />
                <span>{t(`${locale}.title`, { number })}</span>
            </div>
            <IconButton size='mini' Icon={CloseIcon} onClick={handleDeleteClick} />
        </div>
    );
};
