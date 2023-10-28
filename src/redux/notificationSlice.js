import { createSlice } from "@reduxjs/toolkit";
import { NOTIFICATION_TYPE } from "../constants/notificationConstant";

const initialState =  {
    notifications: [],
    notificationsPayment: [],
    notificationsBooking: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    loadNotifications: (state, action) => {
        const notifications = action.payload;
        const notificationsPayment = [];
        const notificationsBooking = [];
        notifications.map((notification) => {
          const item = {
            id: notification.id,
            content: notification.content,
            status: notification.status,
            type: notification.type,
            created_at: notification.created_at,
          };
          if (notification.type === NOTIFICATION_TYPE.PAYMENT) {
            notificationsPayment.push(item);
          }
          if (notification.type === NOTIFICATION_TYPE.BOOKING) {
            notificationsBooking.push(item);
          }
          return item;
        });
        state.notifications = notifications;
        state.notificationsPayment = notificationsPayment;
        state.notificationsBooking = notificationsBooking;
    },
  },
});

export const { loadNotifications } = notificationSlice.actions;

export default notificationSlice.reducer;