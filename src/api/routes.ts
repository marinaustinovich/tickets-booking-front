import { RoutesFilters } from 'types';
import { axios } from 'utils';

export const fetchRoutes = async (filters: RoutesFilters) => {
    const result = await axios.get('/routes', { params: filters });

    return result.data;
};