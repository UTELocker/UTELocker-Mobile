import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../constants/styles';
import { METHOD_TRANSFER, STATUS_TRANSFER, TYPE_TRANSFER } from '../../../constants/walletConstant';
import CardHistory from '../History/CardHistory';
import { useNavigation } from '@react-navigation/native';

const RecentHistory = () => {
    const navigation = useNavigation();
    const DATA = [
        {
            id: '1',
            status: STATUS_TRANSFER.PENDING,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.PAYMENT,
            by: METHOD_TRANSFER.UTE_PAY,
            from: 'Nguyen Van A',
            to: 'UTE Lockers',
            tradingCode: '123456789',
        },
        {
            id: '2',
            status: STATUS_TRANSFER.SUCCESS,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.WITHDRAW,
            by: METHOD_TRANSFER.ZALO_PAY,
            from: 'UTE Pay',
            to: 'Nguyen Van A',
            tradingCode: '123456789',
        },
        {
            id: '3',
            status: STATUS_TRANSFER.ERROR,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.TRANSFER,
            by: METHOD_TRANSFER.UTE_PAY,
            from: 'Nguyen Van A',
            to: 'Nguyen Van B',
            tradingCode: '123456789',
        },
        {
            id: '4',
            status: STATUS_TRANSFER.SUCCESS,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.TOP_UP,
            by: METHOD_TRANSFER.BANK_TRANSFER,
            from: 'Nguyen Van A',
            to: 'UTE Pay',
            tradingCode: '123456789',
        },
        {
            id: '5',
            status: STATUS_TRANSFER.SUCCESS,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.TOP_UP,
            by: METHOD_TRANSFER.MOMO,
            from: 'Nguyen Van A',
            to: 'UTE Pay',
            tradingCode: '123456789',
        },
        {
            id: '6',
            status: STATUS_TRANSFER.SUCCESS,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.TOP_UP,
            by: METHOD_TRANSFER.MOMO,
            from: 'Nguyen Van A',
            to: 'UTE Pay',
            tradingCode: '123456789',
        },
        {
            id: '7',
            status: STATUS_TRANSFER.SUCCESS,
            amount: '200',
            date: '2021-07-01',
            method: TYPE_TRANSFER.WITHDRAW,
            by: METHOD_TRANSFER.BANK_TRANSFER,
            from: 'Nguyen Van A',
            to: 'UTE Pay',
            tradingCode: '123456789',
        },
    ]

    return (
        <View
            style={styles.container}
        >
            <Text
                style={{
                    marginBottom: 10,
                    fontSize: 18,
                    paddingHorizontal: 20,
                }}
            >
                Recent History
            </Text>
            <View 
                style={{
                    borderBottomColor: Colors.lightGray2,
                    borderBottomWidth: 5,
                }}
            />
            {
                DATA.length > 0
                    ? DATA.map((item) => {
                        return <CardHistory
                            key={item.id}
                            item={item}
                        />
                    })
                    : <Text>No history</Text>
            }
            {
                DATA.length > 0
                    ? <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                        }}
                        onPress={() => {
                            navigation.navigate('History');
                        }}
                    >
                        Show more
                    </Text>
                    : null
            }
        </View>
    )
}

export default RecentHistory;


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: Colors.white,
        paddingBottom: 20,
    },
})