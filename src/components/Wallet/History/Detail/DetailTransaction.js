import React from 'react'
import { View, Text } from 'react-native'
import { TYPE_TRANSFER } from '../../../../constants/walletConstant'
import { handleBy, handleTransferType } from '../../../../utils/wallet'
import { Colors } from '../../../../constants/styles'
import { useSelector } from 'react-redux'

const DetailTransaction = ({ item }) => {

    const account = useSelector((state) => state.auth.user);
    
    const CONSTANT_DETAIL_PAYMENT = [
        {
            label: 'Type Transaction',
            value: handleTransferType(item.method),
        },
        {
            label: 'Method',
            value: handleBy(item.by),
        },
        {
            label: 'From',
            value: account.name,
        },
        {
            label: 'To',
            value: 'UTE Lockers',
        },
        {
            label: 'Trading code',
            value: item.reference,
        },
    ]

    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}
        >
            <Text
                style={{
                    fontWeight: '500',
                    fontSize: 18,
                    color: Colors.dark,
                }}
            >
                {
                    item.method === TYPE_TRANSFER.PAYMENT ?
                        'Detail Bill' :
                        'Detail Transaction'
                }
            </Text>
            {
                CONSTANT_DETAIL_PAYMENT.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'column',
                            paddingVertical: 15,
                            borderBottomWidth: index === CONSTANT_DETAIL_PAYMENT.length - 1 ? 0 : 1,
                            borderBottomColor: '#ddd',
                        }}
                    >
                        <Text
                            style={{
                                color: '#999',
                            }}
                        >
                            {item.label}
                        </Text>
                        <Text
                            style={{
                                fontWeight: '400',
                            }}
                        >
                            {item.value}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

export default DetailTransaction