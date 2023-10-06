import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FeatureWallet = ({isShowTitle = true}) => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => Alert.alert('Top Up')}
            >
                <MaterialIcons name="attach-money" size={30} color={
                    isShowTitle ? Colors.primary : Colors.white
                } />
                {
                    isShowTitle && (
                        <Text style={styles.title}>
                            Top Up
                        </Text>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerButton}  
                onPress={() => Alert.alert('Top Up')}
            >
                <Image
                    source={
                        isShowTitle ? require('../../../assets/icons/wallet/icon_withdraw.png') :
                            require('../../../assets/icons/wallet/icon_withdraw_white.png')
                    }
                    style={styles.sizeIcon}
                />
                {
                    isShowTitle && (
                        <Text style={styles.title}>
                            WithDraw
                        </Text>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => {
                    navigation.navigate('WalletApp')
                }}
            >
                <Image
                    source={
                        isShowTitle ? require('../../../assets/icons/wallet/icon_wallet.png') :
                            require('../../../assets/icons/wallet/icon_wallet_white.png')
                    }
                    style={styles.sizeIcon}
                />
                {
                    isShowTitle && (
                        <Text style={styles.title}>
                            UTEPay
                        </Text>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

export default FeatureWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        color: 'gray',
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeIcon: {
        width: 30,
        height: 30,
    }
})