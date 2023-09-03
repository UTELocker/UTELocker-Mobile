import axios from "axios";
const baseURL = "https://e903-2402-800-639f-e235-68b3-7e79-b73b-b34f.ngrok-free.app/api";

const axiosInstance = axios.create({ 
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

const getMethod = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const postMethod = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export { getMethod, postMethod };
