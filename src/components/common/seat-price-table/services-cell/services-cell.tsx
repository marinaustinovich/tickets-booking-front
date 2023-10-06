import React from 'react';
import { useTranslation } from 'react-i18next';
import { CarriageTypesEnum } from 'enums';
import { AirConditionerIcon, CupIcon, LinensIcon, WifiIcon } from 'icons';
import { classname } from 'utils';
import { CoachInfo } from 'types/tickets';

import './services-cell.scss';
import { Tooltip } from 'components/common/tooltip';

type Props = {
    coach: CoachInfo;
};

const cn = classname('services-cell');

export const ServicesCell = ({ coach }: Props) => {
    const { t } = useTranslation('common');
    const locale = 'commons.seat-price-table.tips';
    const { class_type: classType, is_linens_included: isLinensIncluded, have_air_conditioning: isAirConditioningIncluded, have_wifi: isWifi } = coach;
    const isShowLinens = classType !== CarriageTypesEnum.FOURTH;

    return (
        <td className={cn()}>
            <Tooltip text={t(`${locale}.conditioner`)}>
                <AirConditionerIcon className={cn('svg', { included: isAirConditioningIncluded })} />
            </Tooltip>
            <Tooltip text={t(`${locale}.wi-fi`)}>
                <WifiIcon className={cn('svg', { included: isWifi })} />
            </Tooltip>

            {isShowLinens && (
                <Tooltip text={t(`${locale}.linen`)}>
                    <LinensIcon className={cn('svg', { included: isLinensIncluded })} />
                </Tooltip>
            )}
            <Tooltip text={t(`${locale}.food`)}>
                <CupIcon className={cn('svg', { included: classType === CarriageTypesEnum.FIRST })} />
            </Tooltip>
        </td>
    );
};
