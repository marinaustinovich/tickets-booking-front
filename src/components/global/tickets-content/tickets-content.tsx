import React from 'react';
import { classname } from 'utils';

import './tickets-content.scss';
import { TrainSelection } from './train-selection';
import { Route, Routes } from 'react-router-dom';

const cn = classname('tickets-content');

export const TicketsContent = () => {

    return (
        <main className={cn()}>
            <Routes>
                <Route path='/' element={<TrainSelection />} />
            </Routes>
        </main>
    );
};

