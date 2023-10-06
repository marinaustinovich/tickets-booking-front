import React from 'react';
import { useTranslation } from 'react-i18next';

import { classname, formatIndex } from 'utils';

import './number-carriage-block.scss';

type Props = {
    numberCarriage: number;
};

const cn = classname('number-carriage-block');

export const NumberCarriageBlock = ({ numberCarriage }: Props) => {
    const { t } = useTranslation('global');
    const locale = 'place-selection.seat-map.carriage-details-block';

    return (
        <div className={cn()}>
            <span className={cn('number')}>{formatIndex(numberCarriage + 1)}</span>
            <span>{t(`${locale}.number`)}</span>
        </div>
    );
};
