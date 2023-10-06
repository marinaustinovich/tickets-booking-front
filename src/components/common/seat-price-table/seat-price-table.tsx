import React, { useRef, useEffect } from 'react';
import { toKebabCase } from 'js-convert-case';
import { useTranslation } from 'react-i18next';
import { SeatTypesEnum } from 'enums';
import { CoachInfo } from 'types/tickets';
import { RubIcon } from 'icons';
import { classname } from 'utils';

import './seat-price-table.scss';
import { ServicesCell } from './services-cell';

type Props = {
    coach: CoachInfo;
};

const cn = classname('seat-price-table');

export const SeatPriceTable = ({ coach }: Props) => {
    const servicesCellRenderedRef = useRef(false);
    const { t } = useTranslation('common');
    const locale = 'commons.seat-price-table';

    useEffect(() => {
        servicesCellRenderedRef.current = false;
    }, [coach]);

    return (
        <table className={cn()}>
            <thead>
                <tr>
                    <th className={cn('header')}>
                        <span>{t(`${locale}.seats-label`)}</span>
                        <span className={cn('numbers')}>{coach.available_seats}</span>
                    </th>
                    <th className={cn('header')}>{t(`${locale}.price-label`)}</th>
                    <th className={cn('header')}>
                        <span>{t(`${locale}.service-label`)}</span>
                        <span className={cn('services-type')}>{t(`${locale}.service-type-label`)}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {Object.values(SeatTypesEnum).map(key => {
                    if (coach[key] !== 0) {
                        let servicesCell = null;
                        if (!servicesCellRenderedRef.current) {
                            servicesCell = <ServicesCell coach={coach} />;
                            servicesCellRenderedRef.current = true;
                        }

                        return (
                            <tr key={key}>
                                <td>
                                    <span className={cn('seat-type-label')}>{t(`${locale}.${toKebabCase(key)}`)}</span>
                                    <span className={cn('seat-numbers')}></span>
                                </td>
                                <td className={cn('price-wrapper')}>
                                    <span className={cn('price')}>{coach[key]}</span>
                                    <RubIcon />
                                </td>
                                {servicesCell}
                            </tr>
                        );
                    }
                })}
            </tbody>
        </table>
    );
};
