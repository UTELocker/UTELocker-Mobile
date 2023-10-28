import { getMethod } from "./axios";

const getHistory = () => {
    return getMethod('/histories/booking');
}

export { getHistory };
