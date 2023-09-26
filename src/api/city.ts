import { CitiesFilters, City } from 'types';
import { axios } from 'utils';

export const fetchCities = async (filters: CitiesFilters) => {
    const result = await axios.get('/routes/cities', { params: filters });

    return result.data.map((city: City) => ({
        label: city.name.toUpperCase(),
        value: city._id,
    }));
};
