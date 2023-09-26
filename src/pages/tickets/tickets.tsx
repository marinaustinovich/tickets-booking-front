import React from 'react';
import { TicketsContent, TicketsHeader } from 'components';
import { classname } from 'utils';

import './tickets.scss';

const cn = classname('tickets-page');

const TicketsPage = () => (
    <div className={cn()}>
        <TicketsHeader />
        <TicketsContent />
    </div>
);

export default TicketsPage;
