import React, { useMemo } from 'react';

import { classname } from 'utils';
import { useAppSelector } from 'store';
import { routesSelector } from 'store/route';
import { TrainsList } from './trains-list';

import './train-selection.scss';
import { TrainForm } from './train-form';
import { LastTickets } from './last-tickets';

const cn = classname('train-selection');

export const TrainSelection = () => {
    const routes = useAppSelector(routesSelector);

    const initialValues = useMemo(() => {
        if (!routes) {
            return {
                toCity: '641037eb5c49ea004632ee6e',
                fromCity: '641037eb5c49ea004632ee72',
            };
        }

        return {
            toCity: '641037eb5c49ea004632ee6e',
            fromCity: '641037eb5c49ea004632ee72',
            // price: [routes.items[0].min_price, routes.items[0].min_price],
        };
    }, [routes]);

    return (
        <div className={cn()}>
            <div className={cn('sidebar')}>
                <TrainForm initialValues={initialValues}/>
               <LastTickets />
            </div>
            <TrainsList trains={routes.items} />
        </div>
    );
};
