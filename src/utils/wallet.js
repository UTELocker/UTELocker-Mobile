import { Colors } from "../constants/styles";
import { METHOD_TRANSFER, STATUS_TRANSFER, TYPE_TRANSFER } from "../constants/walletConstant";
import { AntDesign } from '@expo/vector-icons';

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
        case TYPE_TRANSFER.DEPOSIT:
            return 'Top up';
        case TYPE_TRANSFER.ALL_TYPE:
            return 'All Transaction';
        case TYPE_TRANSFER.PAYMENT:
            return 'Payment';
        case TYPE_TRANSFER.REFUND:
            return 'Refund';
        case TYPE_TRANSFER.PROMOTION:
            return 'Promotion';
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

export const getLabelStatus = (status) => {
    switch (status) {
        case STATUS_TRANSFER.SUCCESS:
            return 'Success';
        case STATUS_TRANSFER.ERROR:
            return 'Error';
        case STATUS_TRANSFER.PENDING:
            return 'Pending';
        case STATUS_TRANSFER.REFUND:
            return 'Refund';
        case STATUS_TRANSFER.CANCEL:
            return 'Cancel';
        case STATUS_TRANSFER.ALL_STATUS:
            return 'All Status';
        default:
            return 'Success';
    }
}

export const getColorStatus = (status) => {
    switch (status) {
        case STATUS_TRANSFER.SUCCESS:
            return Colors.green;
        case STATUS_TRANSFER.ERROR:
            return Colors.red;
        case STATUS_TRANSFER.PENDING:
            return Colors.orange;
        case STATUS_TRANSFER.REFUND:
            return Colors.dark;
        case STATUS_TRANSFER.CANCEL:
            return Colors.yellow;
        default:
            return Colors.red;
    }
}

export const handleIconStatus = (status) => {
    switch (status) {
        case STATUS_TRANSFER.SUCCESS:
            return <AntDesign name="checkcircle" size={20} color={getColorStatus(status)} />;
        case STATUS_TRANSFER.ERROR:
            return <AntDesign name="exclamationcircle" size={20} color={getColorStatus(status)} />;
        case STATUS_TRANSFER.PENDING:
            return <AntDesign name="clockcircle" size={20} color={getColorStatus(status)} />;
        case STATUS_TRANSFER.REFUND:
            return <AntDesign name="swap" size={20} color={getColorStatus(status)} />;
        case STATUS_TRANSFER.CANCEL:
            return <AntDesign name="closecircle" size={20} color={getColorStatus(status)} />;
        default:
            return <AntDesign name="exclamationcircle" size={20} color={getColorStatus(status)} />;
    }
}
