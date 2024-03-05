import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../../../constants/styles'
import { TYPE_TRANSFER } from '../../../../constants/walletConstant'
import { getColorStatus, getLabelStatus, handleIconStatus } from '../../../../utils/wallet'

const DetailPayment = ({ item }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    color: Colors.dark,
                    fontSize: 30,
                    fontWeight: '500',
                    marginTop: 10,
                }}
            >
                {
                    item.method === TYPE_TRANSFER.TOP_UP ? '+' : '-'
                }
                {
                    item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }đ
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                }}
            >
                <View>
                    {
                        handleIconStatus(item.status)
                    }
                </View>
                <Text
                    style={{
                        color: getColorStatus(item.status),
                        fontSize: 16,
                        fontWeight: '400',
                        marginLeft: 10,
                    }}
                >
                    {
                        getLabelStatus(item.status)
                    }
                </Text>
            </View>
            <Text
                style={{
                    color: Colors.dark,
                    fontSize: 16,
                    fontWeight: '400',
                    marginTop: 10,
                }}
            >
                Complete time: {
                    item.time
                }
            </Text>
        </View>
    )
}

export default DetailPayment