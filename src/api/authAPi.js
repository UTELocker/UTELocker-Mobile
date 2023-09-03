import { getMethod, postMethod } from "./axios";

const login = async (email, password, group) => {
    const data = {
        'email' : email,
        'password' : password,
        'clientId' : group,
    };
    return await postMethod("/auth/login", data);
};

const ListGroup = async (email) => {
    console.log('email', email);
    return await getMethod("/auth/list_client" + "?email=" + email );
};

export { login, ListGroup };