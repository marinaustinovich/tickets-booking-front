import { axios } from 'utils';

export const fetchLastTickets = async () => {
    const result = await axios.get('/routes/last');

    return result.data;
};