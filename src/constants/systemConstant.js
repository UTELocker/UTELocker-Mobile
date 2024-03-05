const FILTER_MOTH = [
    { value: 0, label: 'All'},
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
];

const FILTER_LOCATION = [
    { value: 0, label: 'All' },
];

const FILTER_TYPE_TRANSFER = [
    { value: 6, label: 'All' },
    { value: 0, label: 'Deposit' },
    { value: 1, label: 'Withdraw' },
    { value: 2, label: 'Transfer' },
    { value: 3, label: 'Payment' },
    { value: 4, label: 'Refund' },
    { value: 5, label: 'Promotion' },
];

const FILTER_STATUS = [
    { value: 8, label: 'All' },
    { value: 0, label: 'Available' },
    { value: 1, label: 'Booked' },
    { value: 2, label: 'Using' },
    { value: 3, label: 'Finished' },
    { value: 4, label: 'Cancel' },
    { value: 5, label: 'Unavailable' },
    { value: 6, label: 'Error' },
    { value: 7, label: 'Pending' },
];

const FILTER_METHOD = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Momo' },
    { value: 2, label: 'ZaloPay' },
    { value: 3, label: 'Bank' },
];

const MONTH = {
    ALL_MONTH: 0,
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
};

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 422,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    NETWORK_CONNECT_TIMEOUT_ERROR: 599,
    DISCONNECT_NETWORK_ERROR: 600,
};


export {
    FILTER_MOTH,
    FILTER_TYPE_TRANSFER,
    FILTER_STATUS,
    FILTER_METHOD,
    FILTER_LOCATION,
    MONTH,
    STATUS_CODE
}