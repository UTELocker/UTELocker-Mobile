import { getMethod, postMethod } from "./axios";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const getListLockers =  () => {
    return getMethod('/locations');
};

export { getListLockers };