import React from 'react';
import { classname } from 'utils';
import { DepartureInfo } from 'types';

import './last-ticket-item.scss';
import { AdvantagesBlock, MinPriceBlock, ScheduleRow } from 'components/common';

type Props = {
    departure: DepartureInfo;
};
const cn = classname('last-ticket-item');

export const LastTicketItem = ({ departure }: Props) => {
    const { min_price: minPrice, from, to, have_wifi: haveWiFi, is_express: isExpress } = departure;

    return (
        <div className={cn()}>
            <ScheduleRow from={from} to={to} />
            <div className={cn('details')}>
                <AdvantagesBlock haveWiFi={haveWiFi} isExpress={isExpress} />
                <MinPriceBlock minPrice={minPrice} view='primary' />
            </div>
        </div>
    );
};
