import React, { useEffect } from 'react';

import { classname } from 'utils';
import { useAppSelector, useAppDispatch } from 'store';
import { fetchLastTicketsAction, lastTicketsSelector } from 'store/route';

import './last-tickets.scss';

const cn = classname('last-tickets');

export const LastTickets = () => {
    const dispatch = useAppDispatch();
    const lastTickets = useAppSelector(lastTicketsSelector);
    console.log('lastTickets', lastTickets);

    useEffect(() => {
        dispatch(fetchLastTicketsAction());
    }, [dispatch]);

    return <div className={cn()}>Last Tickets</div>;
};
