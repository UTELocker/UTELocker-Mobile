import { getMethod, postMethod } from "./axios";

const getAll = () => {
    return getMethod('/bookings');
};

const createBooking = (params) => {
    return postMethod('/bookings', params);
}

export { getAll, createBooking };