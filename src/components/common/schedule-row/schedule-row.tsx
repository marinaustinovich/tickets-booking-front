import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalizeHyphenatedString, classname, formatTimestampToTime } from 'utils';
import { DepartureOrArrivalInfo } from 'types';

import './schedule-row.scss';

type ScheduleRowProps = {
    from?: DepartureOrArrivalInfo;
    to?: DepartureOrArrivalInfo;
    duration?: number;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

type ScheduleProps = {
    info: DepartureOrArrivalInfo;
    isFull: boolean;
    isTextAlignEnd?: boolean;
};

const cn = classname('schedule-row');

const Schedule = ({ info, isFull, isTextAlignEnd }: ScheduleProps) => {
    const { t } = useTranslation('global');

    const { datetime, railway_station_name, city } = info;
    return (
        <div className={cn('wrapper', { text: isTextAlignEnd ? 'text-end' : '' })}>
            {isFull && <div className={cn('datetime')}>{formatTimestampToTime(datetime)}</div>}
            <div className={cn('city-name')}>{capitalizeHyphenatedString(city.name)}</div>
            <p className={cn('station-name')}>
                {capitalizeHyphenatedString(railway_station_name)} {t('tickets.trains.station')}
            </p>
        </div>
    );
};

export const ScheduleRow = ({ from, to, duration, Icon }: ScheduleRowProps) => {
    console.log(from, to, duration, Icon);
    if (!from || !to) {
        return null;
    }

    return (
        <div className={cn()}>
            <Schedule info={from} isFull={!!duration} />
            <div className={cn('driving-time')}>
                {duration && <span>{formatTimestampToTime(duration)}</span>}
                {Icon && <Icon />}
            </div>
            <Schedule info={to} isFull={!!duration} isTextAlignEnd={!!duration} />
        </div>
    );
};
