import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalizeHyphenatedString, classname, formatTimestampToTime } from 'utils';
import { DepartureOrArrivalInfo } from 'types';

import './schedule-row.scss';

type ScheduleRowProps = {
    from?: DepartureOrArrivalInfo;
    to?: DepartureOrArrivalInfo;
    duration?: number;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type ScheduleProps = {
    info: DepartureOrArrivalInfo;
};

const cn = classname('schedule-row');

const Schedule = ({ info }: ScheduleProps) => {
    const { t } = useTranslation('global');

    const { datetime, railway_station_name, city } = info;
    return (
        <div className={cn('wrapper')}>
            <div className={cn('datetime')}>{formatTimestampToTime(datetime)}</div>
            <div className={cn('city-name')}>{capitalizeHyphenatedString(city.name)}</div>
            <div className={cn('station-name')}>
                <span>{capitalizeHyphenatedString(railway_station_name)}</span>
                <span>{t('tickets.trains.station')}</span>
            </div>
        </div>
    );
};

export const ScheduleRow = ({ from, to, duration, Icon }: ScheduleRowProps) => {
    if (!from || !to || !duration) {
        return null; 
    }

    return (
        <div className={cn()}>
            <Schedule info={from} />
            <div className={cn('driving-time')}>
                <span>{formatTimestampToTime(duration)}</span>
                <Icon />
            </div>
            <Schedule info={to} />
        </div>
    );
};
