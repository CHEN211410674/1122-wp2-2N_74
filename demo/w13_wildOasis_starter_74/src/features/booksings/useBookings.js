import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiBookings';


export const useBookings = () => {
const { data, error, isLoading} = useQuery({
    queryKey:['bookings_74'],
    queryFn: getBooking(1),
});
return {data, isLoading, error};
};
