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
    { value: 0, label: 'All' },
    { value: 1, label: 'Top Up' },
    { value: 3, label: 'Withdraw' },
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

export {
    FILTER_MOTH,
    FILTER_TYPE_TRANSFER,
    FILTER_STATUS,
    FILTER_METHOD,
    FILTER_LOCATION,
}