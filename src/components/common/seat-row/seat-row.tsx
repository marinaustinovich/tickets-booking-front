import React, { useMemo } from 'react';
import { toKebabCase } from 'js-convert-case';
import { useTranslation } from 'react-i18next';
import { classname, findMinValue } from 'utils';
import { MinPriceBlock } from '../min-price-block';
import { PriceInfo } from 'types';
import { Dropdown, DropdownOption } from '../dropdown';

import './seat-row.scss';

type Props = {
    classSeat: string;
    count: number;
    prices: PriceInfo;
};

const cn = classname('seat-row');

export const SeatRow = ({ classSeat, count, prices }: Props) => {
    const { t } = useTranslation('global');
    const localeClass = 'tickets.trains.classSeat';
    const minPriceValue = findMinValue(prices);

    const options: DropdownOption[] = useMemo(
        () =>
            Object.entries(prices).map(([key, price]) => ({
                label: t(`${localeClass}.${toKebabCase(key)}`),
                content: price,
            })),
        [prices, t, localeClass],
    );

    return (
        <div className={cn()}>
            <div className={cn('class-seat')}>{t(`${localeClass}.${classSeat}`)}</div>
            <Dropdown options={options}>
                <span className={cn('count')}>{count}</span>
            </Dropdown>
            <MinPriceBlock minPrice={minPriceValue} />
        </div>
    );
};
