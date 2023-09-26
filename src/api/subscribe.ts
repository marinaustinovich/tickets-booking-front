import { SubscribeFilters } from 'types';
import { axios } from 'utils';

export const fetchSubscribe = async (filters: SubscribeFilters) => {
    try {
        const result = await axios.post('/subscribe', { params: filters });
        return result.data;
    } catch (error) {
        console.error('There was an error fetching data:', error);
    }
};
