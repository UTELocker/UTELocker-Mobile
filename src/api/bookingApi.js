import { getMethod, postMethod } from "./axios";

const getAll = () => {
    return getMethod('/bookings');
};

export { getAll };