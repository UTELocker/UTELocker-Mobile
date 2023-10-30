import { getMethod, putMethod } from "./axios";

const NOTIFICATION_PREFIX = '/notifications';

const getNotifications = async () => {
    const res = await getMethod(NOTIFICATION_PREFIX);
    return res;
}

const readNotification = async (id) => {
    const res = await putMethod(NOTIFICATION_PREFIX+ '/' + id + '/status');
    return res;
}

const getDetailNotification = async (id) => {
    const res = await getMethod(NOTIFICATION_PREFIX+ '/' + id);
    return res;
}

export {
    getNotifications,
    readNotification,
    getDetailNotification
}