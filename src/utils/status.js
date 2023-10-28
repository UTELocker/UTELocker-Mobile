import { STATUS_LOCKER } from "../constants/lockerConstant";

export const stylesStatus = (status) => {
    switch (status) {
        case STATUS_LOCKER.FINISHED:
            return {
                backgroundColor: 'green',
            }
        case STATUS_LOCKER.CANCEL:
            return {
                backgroundColor: 'orange',
            }
        case STATUS_LOCKER.PENDING:
            return {
                backgroundColor: 'yellow',
            }
        default:
            return {
                backgroundColor: 'red',
            }
    }
}

export const handleStatus = (status) => {
    switch (status) {
        case STATUS_LOCKER.FINISHED:
            return 'Finished';
        case STATUS_LOCKER.CANCEL:
            return 'Cancel';
        case STATUS_LOCKER.PENDING:
            return 'Pending';
        default:
            return 'Error';
    }
}