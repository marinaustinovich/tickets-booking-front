import React from 'react';

import { classname } from 'utils';
import { useAppSelector } from 'store';
import { routesSelector } from 'store/route';
import { TrainsList } from './trains-list';

import './train-selection.scss';
import { TrainForm } from './train-form';

const cn = classname('train-selection');

export const TrainSelection = () => {
    const routes = useAppSelector(routesSelector);

    return (
        <div className={cn()}>
            <div className={cn('sidebar')}>
                <TrainForm />
            </div>
            <TrainsList trains={routes.items} />
        </div>
    );
};
