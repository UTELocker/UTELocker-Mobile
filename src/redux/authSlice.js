import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from 'expo-secure-store';

const initialState =  {
    isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
        if (action.payload !== null) {
            const setToken = async () => {
                await SecureStore.setItemAsync('token', action.payload);
            }
            setToken();
        }
        state.isLogin = true;
    },
    logout: (state) => {
        const deleteToken = async () => {
            await SecureStore.deleteItemAsync('token');
        }
        deleteToken();
        state.isLogin = false;
    }
  },
});

export const { setIsLogin, logout } = authSlice.actions;

export default authSlice.reducer;