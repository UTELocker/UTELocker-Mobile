const STATUS_LOCKER = {
    AVAILABLE: 0,
    BOOKED: 1,
    USING: 2,
    FINISHED: 3,
    CANCEL: 4,
    UNAVAILABLE: 5,
    ERROR: 6,
    PENDING: 7,
};

const TYPE_LOCKER = {
    SLOT: 'SLOT',
    CPU: 'CPU',
    EMPTY: 'EMPTY'
}

export {
    STATUS_LOCKER,
    TYPE_LOCKER,
};