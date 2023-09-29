import React, { useState } from 'react';
import { classname } from 'utils';
import { TrainInfo } from 'types';
import { useTranslation } from 'react-i18next';
import { TrainItem } from '../train-item';
import { NumericPaginate } from 'components/common';

import './trains-list.scss';

type Props = {
    trains: TrainInfo[] | [];
};

const cn = classname('trains-list');

export const TrainsList = ({ trains }: Props) => {
    const { t } = useTranslation('global');
    const [page, setPage] = useState(1);
    const lastPage = 10;
    const isShowPaginate = trains && trains.length > 0;

    return (
        <div className={cn()}>
            <div className={cn('total-info')}>
                <div>
                    {t('tickets.trains.found-count')}: {trains?.length ?? 0}
                </div>
            </div>
            <div className={cn('items')}>
                {trains.map(train => (
                    <TrainItem train={train} key={train.departure.train._id} />
                ))}
            </div>
            {isShowPaginate && <NumericPaginate lastPage={lastPage} page={page} onChange={setPage} />}
        </div>
    );
};
