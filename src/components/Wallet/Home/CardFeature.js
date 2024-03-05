import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native"
import { Colors } from "../../../constants/styles";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardFeature = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.card}
        >
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => Linking.openURL(process.env.EXPO_PUBLIC_URL + '/wallet/topup')}
            >
                <MaterialIcons name="attach-money" size={30} color={Colors.primary}/>
                <Text style={styles.title}>
                    Top Up
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerButton}  
                onPress={() => navigation.navigate('Transfer')}
            >
                <Image
                    source={require('../../../../assets/icons/wallet/icon_transfer.png')}
                    style={[
                        styles.sizeIcon,
                        {
                            width: 40,
                        }
                    ]}
                />
                <Text style={styles.title}>
                    Transfer
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerButton}  
                onPress={() => {
                    navigation.navigate('Withdraw');
                }}
            >
                <Image
                    source={require('../../../../assets/icons/wallet/icon_withdraw.png')}
                    style={styles.sizeIcon}
                />
                <Text style={styles.title}>
                    WithDraw
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerButton}  
                onPress={() => Alert.alert('Top Up')}
            >
                <Entypo name="credit-card" size={35} color={Colors.primary} />
                <Text style={styles.title}>
                    Payment Methods
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardFeature;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
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
});
