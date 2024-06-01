import { useEffect } from 'react';
import { getBooking } from '../services/apiBookings';

const Bookings_74 = () => {
  useEffect(() => {
    getBooking(1).then((data) => console.log('booking(1) data', data));
  }, []);

  // console.log('bookings(1) data', data);

  return <>Bookings_74 page</>;
};

export default Bookings_74;
