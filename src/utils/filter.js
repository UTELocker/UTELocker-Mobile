import { MONTH } from "../constants/systemConstant";

export const getLabelMonth = (value) => {
    switch (value) {
        case MONTH.ALL_MONTH:
            return 'All months';
        case MONTH.JANUARY:
            return 'January';
        case MONTH.FEBRUARY:
            return 'February';
        case MONTH.MARCH:
            return 'March';
        case MONTH.APRIL:
            return 'April';
        case MONTH.MAY:
            return 'May';
        case MONTH.JUNE:
            return 'June';
        case MONTH.JULY:
            return 'July';
        case MONTH.AUGUST:
            return 'August';
        case MONTH.SEPTEMBER:
            return 'September';
        case MONTH.OCTOBER:
            return 'October';
        case MONTH.NOVEMBER:
            return 'November';
        case MONTH.DECEMBER:
            return 'December';
        default:
            return 'All months';
    }
}

export const getLabelNotificationType = (value) => {
    switch (value) {
        case 'payment':
            return 'Payment';
        case 'booking':
            return 'Booking';
        case 'super_admin':
            return 'Super Admin';
        case 'locker_system':
            return 'Locker System';
        case 'site_group':
            return 'Site Group';
        case 'report':
            return 'Report';
        default:
            return 'All';
    }
}