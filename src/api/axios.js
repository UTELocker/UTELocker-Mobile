import axios from 'axios';
const baseURL = "https://cda0-125-235-233-111.ngrok-free.app/api";

const axiosInstance = axios.create({ 
    baseURL: baseURL 
});

const getMethod = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
};

const postMethod = async (url, data) => {

    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export { getMethod, postMethod };
