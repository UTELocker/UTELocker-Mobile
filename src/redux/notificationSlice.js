import { createSlice } from "@reduxjs/toolkit";
import { NOTIFICATION_STATUS, NOTIFICATION_TYPE } from "../constants/notificationConstant";

const initialState =  {
    notifications: [],
    notificationsPayment: [],
    notificationsBooking: [],
    notificationsCount: 0,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    loadNotifications: (state, action) => {
        const notifications = action.payload;
        const notificationsPayment = [];
        const notificationsBooking = [];
        let count = 0;
        state.notifications = notifications.map((notification) => {
          const date = new Date(notification.created_at);
          const item = {
            id: notification.id,
            content: notification.content,
            status: notification.status,
            type: notification.type,
            created_at: date.getDay() + "/" +
                        date.getMonth() + " " +
                        date.getHours() + ":" +
                        date.getMinutes(),
          };
          if (notification.type === NOTIFICATION_TYPE.PAYMENT) {
            notificationsPayment.push(item);
          }
          if (notification.type === NOTIFICATION_TYPE.BOOKING) {
            notificationsBooking.push(item);
          }
          if (notification.status === NOTIFICATION_STATUS.UNREAD) {
            count += 1;
          }
          return item;
        });
        state.notificationsCount = count;
        state.notificationsPayment = notificationsPayment;
        state.notificationsBooking = notificationsBooking;
    },
    setStatus: (state, action) => {
        const { id, status } = action.payload;
        const notifications = state.notifications;
        const notificationsPayment = [];
        const notificationsBooking = [];
        let count = 0;
        state.notifications = notifications.map((notification) => {
            if (notification.id === id) {
                notification.status = status;
            }
            if (notification.status === NOTIFICATION_STATUS.UNREAD) {
                count += 1;
            }
            if (notification.type === NOTIFICATION_TYPE.PAYMENT) {
                notificationsPayment.push(notification);
            }
            if (notification.type === NOTIFICATION_TYPE.BOOKING) {
                notificationsBooking.push(notification);
            }
            return notification;
        });
        state.notificationsCount = count;
        state.notifications = notifications;
        state.notificationsPayment = notificationsPayment;
        state.notificationsBooking = notificationsBooking;
    },
  },
});

export const { loadNotifications, setStatus } = notificationSlice.actions;

export default notificationSlice.reducer;