import { getMethod } from "./axios";

const getNotifications = async () => {
    const res = await getMethod('/notifications');
    return res;
}

export default getNotifications;