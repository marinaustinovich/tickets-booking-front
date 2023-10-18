import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { classname } from 'utils';
import { LastTickets, TrainForm, TrainsList } from './train-selection';
import { useAppSelector } from 'store';
import { routesSelector } from 'store/route';
import { PlaceSelection } from './place-selection';

import './tickets-content.scss';

const cn = classname('tickets-content');

export const TicketsContent = () => {
    const routes = useAppSelector(routesSelector);
    return (
        <main className={cn()}>
            <div className={cn('sidebar')}>
                <TrainForm />
                <LastTickets />
            </div>

            <Routes>
                <Route index element={<TrainsList trains={routes.items} totalCount={routes.total_count} />} />
                <Route path='place/:index' element={<PlaceSelection />} />
            </Routes>
        </main>
    );
};
