import axios from "axios";
import * as SecureStore from 'expo-secure-store';
const baseURL = "https://utelocker.svute.com/api";

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
        baseURL: baseURL,
        headers: header,
    });
}

const getMethod = async (url) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const postMethod = async (url, data) => {
    const axiosInstance = await setAxiosInstance();
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export { getMethod, postMethod };
