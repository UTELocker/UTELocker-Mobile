import { getMethod, postMethod } from "./axios";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const getListLockers = async () => {
    // delay 1s
    await sleep(1000);
    return [
        {
            id: '1',
            name: 'Locker 1',
            address: 'Jl. Raya Bogor, No. 1',
            status: 'Available',
            latitude: 10.828562235633509,
            longitude: 106.68535728194202,
        },
        {
            id: '2',
            name: 'Locker 2',
            address: 'Pondok Indah Mall, No. 1',
            status: 'Available',
            latitude: 10.859664639125846,
            longitude: 106.75540151509817,
        },
        {
            id: '3',
            name: 'Locker 3',
            address: 'Jl. Raya Bogor, No. 1',
            status: 'Available',
            latitude: 10.863868211129118, 
            longitude: 106.7577512105526,
        }
    ]
};

export { getListLockers };