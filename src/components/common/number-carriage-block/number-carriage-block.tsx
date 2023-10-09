import React from 'react';
import { useTranslation } from 'react-i18next';

import { classname, formatIndex } from 'utils';

import './number-carriage-block.scss';

type Props = {
    numberCarriage: number;
};

const cn = classname('number-carriage-block');

export const NumberCarriageBlock = ({ numberCarriage }: Props) => {
    const { t } = useTranslation('common');

    return (
        <div className={cn()}>
            <span className={cn('number')}>{formatIndex(numberCarriage + 1)}</span>
            <span>{t('commons.number-carriage-block')}</span>
        </div>
    );
};
