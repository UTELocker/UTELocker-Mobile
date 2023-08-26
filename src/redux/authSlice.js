import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from 'expo-secure-store';

const getToken = async () => {
    return await SecureStore.getItemAsync('token');
}

const initialState = {
    isLogin: getToken() ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
        const setToken = async () => {
            await SecureStore.setItemAsync('token', action.payload);
        }
        setToken();
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