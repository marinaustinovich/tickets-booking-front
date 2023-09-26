import { format } from 'date-fns';

export const formatTimestampToTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    return format(date, 'H : mm');
};
