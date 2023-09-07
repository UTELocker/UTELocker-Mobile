import { getMethod, postMethod } from "./axios";

const login = async (email, password, group) => {
    const data = {
        'email' : email,
        'password' : password,
        'clientId' : group,
    };
    return await postMethod("/auth/login", data);
};

const logout = async () => {
    return await getMethod("/auth/logout");
};

const ListGroup = async (email) => {
    return await getMethod("/auth/list-client" + "?email=" + email );
};

const userDetail = async () => {
    return await getMethod("/user");
};

export { login, ListGroup, userDetail, logout };