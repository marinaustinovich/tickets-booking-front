import { axios } from 'utils';

export const fetchCarriagesDetails = async (id: string) => {
    const result = await axios.get(`/routes/${id}/seats`);

    return result.data;
};
