import React from 'react';
import { PassengerContent, TrainContent, TicketsHeader } from 'components';
import { classname } from 'utils';

import './tickets.scss';
import { Route, Routes } from 'react-router-dom';

const cn = classname('tickets-page');

const TicketsPage = () => (
    <div className={cn()}>
        <TicketsHeader />
        <Routes>
            <Route path='/train/*' element={<TrainContent />} />
            <Route path='passenger' element={<PassengerContent />} />
        </Routes>
    </div>
);

export default TicketsPage;
