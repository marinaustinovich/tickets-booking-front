import React, { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { IconButton, Paper } from 'components';
import { PlusCircleIcon } from 'icons';

import './add-passenger-block.scss';

type Props = {
    onAddPassenger: () => void;
};

const cn = classname('add-passenger-block');

export const AddPassengerBlock = ({ onAddPassenger }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'passenger-content';

    const handlePassengerClick = useCallback(() => {
        console.log('add');
        onAddPassenger();
    }, [onAddPassenger]);

    const header = useMemo(
        () => (
            <div className={cn()}>
                <span>{t(`${locale}.add-passenger-button-label`)}</span>
                <IconButton size='midi' view='primary' Icon={PlusCircleIcon} onClick={handlePassengerClick} />
            </div>
        ),
        [handlePassengerClick, t],
    );

    return <Paper header={header} />;
};
