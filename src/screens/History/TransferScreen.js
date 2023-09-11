import { StyleSheet, Text, View } from "react-native";
import CardTime from "../../components/History/CardTime";
import CardBooking from "../../components/History/CardBooking";
import STATUS_LOCKER from "../../constants/statusBooking";
import CardTransfer from "../../components/History/CardTransfer";
import { useEffect, useState } from "react";

const HistoryTransferScreen = ({
    balanceVisibility,
    contentSearch,
}) => {
    const defaultData = [
        {
            date: '2021-09',
            transfers: [
                {
                    id: 1,
                    type: 'withdraw',
                    amount: 30000,
                    balance: 2000,
                    time: '2021-09-20 10:00:00',
                    status: STATUS_LOCKER.FINISHED,
                    method: 'Momo',
                }
            ]
        },
        {
            date: '2021-08',
            transfers: [
                {
                    id: 3,
                    type: 'withdraw',
                    amount: 30000,
                    balance: 2000,
                    time: '2021-08-16 10:00:00',
                    status: STATUS_LOCKER.ERROR,
                    method: 'Paypal',
                },
                {
                    id: 4,
                    type: 'deposit',
                    amount: 100000,
                    balance: 100000,
                    time: '2021-08-13 10:00:00',
                    status: STATUS_LOCKER.FINISHED,
                    method: 'ZaloPay',
                }
            ]
        }
    ]
    const [data, setData] = useState(defaultData);
    useEffect(() => {
        if (contentSearch) {
            const newData = defaultData.map((item) => {
                const newTransfers = item.transfers.filter((transfer) => {
                    return transfer.method.toLowerCase().includes(contentSearch.toLowerCase());
                });
                return {
                    ...item,
                    transfers: newTransfers,
                }
            });
            setData(newData);
        } else {
            setData(defaultData);
        }
    }, [contentSearch])

    return (
        <View style={styles.container}>
            {
                data.map((item, index) => (
                    <View
                        key={index}
                    >
                        {item.transfers?.length > 0 ? <CardTime time={item.date} /> : null}
                        {item.transfers.map((transfer, index) => (
                            <CardTransfer 
                                transfer={transfer} 
                                key={index}
                                balanceVisibility={balanceVisibility}
                            />
                        ))}
                    </View>
                ))
            }
        </View>
    );
};

export default HistoryTransferScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingHorizontal: 15,
    }
});
