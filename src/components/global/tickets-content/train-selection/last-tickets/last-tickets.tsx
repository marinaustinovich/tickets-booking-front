import React, { useEffect } from 'react';

import { classname } from 'utils';
import { useAppSelector, useAppDispatch } from 'store';
import { fetchLastTicketsAction, lastTicketsSelector } from 'store/route';
import { useTranslation } from 'react-i18next';
import { LastTicketItem } from './last-ticket-item';

import './last-tickets.scss';

const cn = classname('last-tickets');

export const LastTickets = () => {
    const { t } = useTranslation('global');
    const dispatch = useAppDispatch();
    const lastTickets = useAppSelector(lastTicketsSelector);

    useEffect(() => {
        dispatch(fetchLastTicketsAction());
    }, [dispatch]);

    return (
        <div className={cn()}>
            <h3>{t('tickets.last-tickets.title')}</h3>
            {lastTickets.map(lastTicket => (
                <LastTicketItem departure={lastTicket.departure} key={lastTicket.departure.train._id} />
            ))}
        </div>
    );
};
