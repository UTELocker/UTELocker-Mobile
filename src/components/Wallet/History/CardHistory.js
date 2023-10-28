import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../constants/styles';
import { handleBy, handleIconPayment, handleIconStatus, handleTransferType } from '../../../utils/wallet';
import { TYPE_TRANSFER } from '../../../constants/walletConstant';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardHistory = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{
                padding: 20,
                borderRadius: 10,
                borderBottomColor: Colors.lightGray2,
                borderBottomWidth: 5,
                flexDirection: 'row',
            }}
            onPress={() => {
                navigation.navigate('DetailHistory', {
                    item
                })
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
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: Colors.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {
                        handleIconStatus(item.status)
                    }
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
                            ? `+${item.amount}đ`
                            : `-${item.amount}đ`
                    }</Text>
                </View>
                <Text>{handleBy(item.by)}</Text>
                <Text>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardHistory;