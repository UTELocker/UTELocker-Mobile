import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../constants/styles';
import { handleBy, handleIconPayment, handleTransferType } from '../../utils/wallet';
import { TYPE_TRANSFER } from '../../constants/wallet';

const CardHistory = ({ item }) => {
    return (
        <View
            style={{
                padding: 20,
                borderRadius: 10,
                borderBottomColor: Colors.lightGray2,
                borderBottomWidth: 5,
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 30,
                        backgroundColor: Colors.lightGray,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={handleIconPayment(item.method)}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    flex: 4,
                    paddingLeft: 20,
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                    >
                        {handleTransferType(item.method)}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            color: item.method === TYPE_TRANSFER.TOP_UP ? Colors.green : Colors.red
                        }}
                    >{
                        item.method === TYPE_TRANSFER.TOP_UP
                            ? `+$${item.amount}`
                            : `-$${item.amount}`
                    }</Text>
                </View>
                <Text>{handleBy(item.by)}</Text>
                <Text>{item.date}</Text>
            </View>
        </View>
    )
}

export default CardHistory;