import { getMethod, postMethod } from "./axios";

const login = async (email, password) => {
    const data = {
        'email' : email,
        'password' : password,
    };
    return await postMethod("/auth/login", data);
};

export { login };