import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import {BASE_URL} from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/authSlice";
import STATUS_CODE from "../constants/statusCode";
import { showNotification } from "../redux/notificationSlice";
import { TYPE_NOTIFICATION } from "../constants/typeNotification";

const setAxiosInstance = async () => {
    const token = await SecureStore.getItemAsync('token');
    const header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    if (token !== null) {
        header['Authorization'] = 'Bearer ' + token;
    }
    return axios.create({
        baseURL: BASE_URL,
        headers: header,
    });
}

const unauthorized = (error) => {
    const dispatch = useDispatch();
    dispatch(setLogout());
}

const getMethod = async (url) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
            unauthorized(error);
        }
        return error.response;
    }
};

const postMethod = async (url, data) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.post(url, data);
        return response;
    } catch (error) {
        if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
            unauthorized(error);
        }
        return error.response;
    }
};

const deleteMethod = async (url) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.delete(url);
        return response;
    } catch (error) {
        if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
            unauthorized(error);
        }
        return error.response;
    }
};

export { getMethod, postMethod, deleteMethod };
