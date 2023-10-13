import { getMethod, postMethod } from "./axios";

const searchLockers = (searchParams) => {
    return postMethod('/lockers/search', searchParams);
};

const getModuleOfLocker = (lockerId) => {
    return getMethod(`/lockers/${lockerId}/module`);
};

export { searchLockers, getModuleOfLocker };