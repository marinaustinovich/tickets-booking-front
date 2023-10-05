import { CarriageFilters } from 'types/tickets';
import { axios } from 'utils';

export const fetchCarriagesDetails = async (id: string, filters: CarriageFilters) => {
    const result = await axios.get(`/routes/${id}/seats`, { params: filters });
    return result.data;
};
