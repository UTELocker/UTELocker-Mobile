import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    title: '',
    message: '',
    type: '',
    show: false,
    isReturnHome: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
        state.title = action.payload.title;
        state.message = action.payload.message;
        state.type = action.payload.type;
        state.isReturnHome = action.payload.isReturnHome;
        state.show = true;
    },
    invisibleNotification: (state) => {
        state.title = '';
        state.message = '';
        state.type = '';
        state.isReturnHome = false;
        state.show = false;
    },
  },
});

export const { showNotification, invisibleNotification } = notificationSlice.actions;

export default notificationSlice.reducer;