import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Colors } from '../../../constants/styles';
import { METHOD_TRANSFER, STATUS_TRANSFER, TYPE_TRANSFER } from '../../../constants/wallet';
import { handleBy, handleIconPayment, handleTransferType } from '../../../utils/wallet';
import CardHistory from './CardHistory';

const ListHistories = () => {
    const DATA = [
        [
            {
                id: '1',
                status: STATUS_TRANSFER.PENDING,
                amount: '200',
                date: '2021-12-21',
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
                date: '2021-12-01',
                method: TYPE_TRANSFER.WITHDRAW,
                by: METHOD_TRANSFER.ZALO_PAY,
                from: 'UTE Pay',
                to: 'Nguyen Van A',
                tradingCode: '123456789',
            },
        ],
        [
            {
                id: '3',
                status: STATUS_TRANSFER.ERROR,
                amount: '200',
                date: '2021-09-15',
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
                date: '2021-09-07',
                method: TYPE_TRANSFER.TOP_UP,
                by: METHOD_TRANSFER.BANK_TRANSFER,
                from: 'Nguyen Van A',
                to: 'UTE Pay',
                tradingCode: '123456789',
            },
        ],
        [
            {
                id: '5',
                status: STATUS_TRANSFER.SUCCESS,
                amount: '200',
                date: '2021-06-16',
                method: TYPE_TRANSFER.TOP_UP,
                by: METHOD_TRANSFER.MOMO,
                from: 'Nguyen Van A',
                to: 'UTE Pay',
                tradingCode: '123456789',
            },
        ],
        [
            {
                id: '6',
                status: STATUS_TRANSFER.SUCCESS,
                amount: '200',
                date: '2021-02-31',
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
                date: '2021-02-01',
                method: TYPE_TRANSFER.WITHDRAW,
                by: METHOD_TRANSFER.BANK_TRANSFER,
                from: 'UTE Pay',
                to: 'Nguyen Van A',
                tradingCode: '123456789',
            },
        ]
    ]

    return (
        <View
            style={styles.container}
        >
            <FlatList
                data={DATA}
                keyExtractor={
                    item => item[0].id
                }
                renderItem={({ item, index }) => {
                    return (
                        <View
                            key={index}
                            style={{
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '500',
                                    marginBottom: 10,
                                    paddingLeft: 20,
                                    backgroundColor: Colors.lightGray2,
                                    paddingVertical: 20,
                                }}
                            >
                                Month {
                                    item[0].date.split('-')[1]
                                }
                            </Text>
                            <FlatList
                                data={item}
                                renderItem={({item}) => (
                                    <CardHistory
                                        item={item}
                                    />
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default ListHistories;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingBottom: 20,
    },
})