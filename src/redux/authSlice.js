import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from 'expo-secure-store';

const initialState =  {
    user: {
        token: null,
        id: null,
        email: null,
        name: null,
        phone: null,
        address: null,
        clientId: null,
    },
    isLogin: false,
    isLoginFirebase: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
        if (action.payload.accessToken !== undefined ) {
            const setToken = async () => {
                await SecureStore.setItemAsync('token', action.payload.accessToken);
            }
            setToken();
        }
        state.user = {
            token: action.payload.accessToken,
            email: action.payload.email ?? '',
            name: action.payload.name ?? '',
            phone: action.payload.mobile ?? '',
            address: action.payload.address ?? '',
            clientId: action.payload.client_id ?? '',
            id: action.payload.id ?? '',
        };
    },
    setLogout: (state) => {
        const deleteToken = async () => {
            await SecureStore.deleteItemAsync('token');
        }
        deleteToken();
        state.user = {
            token: null,
            email: null,
            name: null,
            phone: null,
            address: null,
        };
        state.isLogin = false;
    },
    setLoginFirebase: (state, action) => {
        state.isLoginFirebase = action.payload;
    },
    setIsLogin: (state, action) => {
        state.isLogin = action.payload;
    },
  },
});

export const { setLogin, setLogout, setLoginFirebase, setIsLogin } = authSlice.actions;

export default authSlice.reducer;