import { format } from 'date-fns';

export const formatTimestampToTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    return format(date, 'H : mm');
};

export const pluralize = (number: number, titles: [string, string, string]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
