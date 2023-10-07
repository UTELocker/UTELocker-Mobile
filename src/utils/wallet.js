import { METHOD_TRANSFER, TYPE_TRANSFER } from "../constants/wallet";

export const handleIconPayment = (type) => {
    switch (type) {
        case TYPE_TRANSFER.TRANSFER:
            return require('../../assets/icons/wallet/icon_transfer.png');
        case TYPE_TRANSFER.WITHDRAW:
            return require('../../assets/icons/wallet/icon_withdraw_2.png'); 
        case TYPE_TRANSFER.TOP_UP:
            return require('../../assets/icons/wallet/icon_income.png');
        default:
            return require('../../assets/icons/wallet/icon_payment.png');
    }
}

export const handleTransferType = (type) => {
    switch (type) {
        case TYPE_TRANSFER.TRANSFER:
            return 'Transfer';
        case TYPE_TRANSFER.WITHDRAW:
            return 'Withdraw';
        case TYPE_TRANSFER.TOP_UP:
            return 'Top up';
        default:
            return 'Payment';
    }
}

export const handleBy = (by) => {
    switch (by) {
        case METHOD_TRANSFER.UTE_PAY:
            return 'UTE Pay';
        case METHOD_TRANSFER.ZALO_PAY:
            return 'Zalo Pay';
        case METHOD_TRANSFER.BANK_TRANSFER:
            return 'Bank transfer';
        case METHOD_TRANSFER.MOMO:
            return 'Momo';
        default:
            return 'UTE Pay';
    }
}