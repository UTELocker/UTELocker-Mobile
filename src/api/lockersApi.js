import { getMethod, postMethod } from "./axios";

const searchLockers = (searchParams) => {
    return postMethod('/search/lockers', searchParams);
};

const postModuleOfLocker = (lockerId, params) => {
    return postMethod(`/lockers/${lockerId}/modules`, params);
};

export { searchLockers, postModuleOfLocker };