import { STATUS_CODE } from "../constants/systemConstant";

export const handleStatus = (status) => {
    switch(status) {
        case STATUS_CODE.PENDING:
            return 'Pending';
        case STATUS_CODE.APPROVED:
            return 'Approved';
        case STATUS_CODE.REJECTED:
            return 'Rejected';
        case STATUS_CODE.CANCELLED:
            return 'Cancelled';
        case STATUS_CODE.EXPIRED:
            return 'Expired';
        case STATUS_CODE.COMPLETED:
            return 'Completed';
        case STATUS_CODE.LOCKED:
            return 'Locked';
        default:
            return 'Unknown';
    }
}

export const handleStatusColor = (status) => {
    switch (status) {
        case STATUS_CODE.PENDING:
            return 'orange';
        case STATUS_CODE.APPROVED:
            return 'green';
        case STATUS_CODE.REJECTED:
            return 'red';
        case STATUS_CODE.CANCELLED:
            return 'red';
        case STATUS_CODE.EXPIRED:
            return 'red';
        case STATUS_CODE.COMPLETED:
            return 'green';
        case STATUS_CODE.LOCKED:
            return 'red';
        default:
            return 'black';
    }
}

export const isActivity = (status) => {
    return status === STATUS_CODE.APPROVED || status === STATUS_CODE.APPROVED;
}
