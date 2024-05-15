import supabase, { supabaseUrl } from './supabase';

export const getBooking = async(id) => {
    const {data, error } = await supabase
    .from('bookings_74')
    .select('*, cabins_74(*),guests_74(*)')
    .eq('id', id);

if (error) {
    console.error(error);
    throw new Error ('Cabins could not be loaded');
}
return data;
};
