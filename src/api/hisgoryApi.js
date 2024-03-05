import { getMethod } from "./axios";

const getHistory = () => {
    return getMethod('/histories/booking');
}

const getTransaction = () => {
    return getMethod('/payments/transactions');
}

export { getHistory, getTransaction };
