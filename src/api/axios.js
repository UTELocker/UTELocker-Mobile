import axios from "axios";
import * as SecureStore from 'expo-secure-store';

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
        baseURL: process.env.EXPO_PUBLIC_BASE_URL,
        headers: header,
    });
}

const getMethod = async (url) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        return error.response;
    }
};

const postMethod = async (url, data) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.post(url, data);
        return response;
    } catch (error) {
        return error.response;
    }
};

const deleteMethod = async (url) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.delete(url);
        return response;
    } catch (error) {
        return error.response;
    }
};

export { getMethod, postMethod, deleteMethod };
