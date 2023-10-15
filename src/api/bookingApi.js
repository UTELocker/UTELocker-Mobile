import { deleteMethod, getMethod, postMethod } from "./axios";

const getAll = () => {
    return getMethod('/bookings');
};

const createBooking = (params) => {
    return postMethod('/bookings', params);
}

const cancelBooking = (id) => {
    return deleteMethod(`/bookings/${id}`);
}

export { getAll, createBooking, cancelBooking };