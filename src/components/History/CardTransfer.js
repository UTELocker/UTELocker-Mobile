import { Text, View, TextInput, Pressable, StyleSheet } from "react-native"
import { Entypo, AntDesign } from '@expo/vector-icons';
import STATUS_LOCKER from "../../constants/statusBooking";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

function IconStatus({ status }) {
    switch (status) {
        case STATUS_LOCKER.FINISHED:
            return <AntDesign name="checkcircle" size={24} color="green" />
        case STATUS_LOCKER.CANCEL:
            return <AntDesign name="closecircle" size={24} color="orange" />
        case STATUS_LOCKER.PENDING:
            return <AntDesign name="clockcircle" size={24} color="yellow" />
        default:
            return <AntDesign name="exclamationcircle" size={24} color="red" />     
    }
}

const CardTransfer = ({ transfer, balanceVisibility }) => {
    const { id, amount, type, time, status, balance, method } = transfer;
    const navigation = useNavigation();
    return (
        <Pressable
            style={styles.containerCard}
            onPress={() => 
                navigation.navigate(
                    'DetailHistory', 
                    { 
                        history: transfer, 
                        type: 'transfer' 
                    }
                )}
        >
            <View
                style={styles.containerIconCard}
            >
                <Entypo 
                    name="wallet" 
                    size={35} 
                    color="black" 
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }}
                >
                    <IconStatus status={status} />
                </View>
            </View>
            <View
                style={styles.containerContentCard}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    {type == 'deposit' ? 'Top up' : 'Withdraw'}
                </Text>
                <Text
                    style={styles.textCard}
                >
                    {time}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <TextInput
                        placeholder="Balance"
                        placeholderTextColor={Colors.gray}
                        style={[
                            styles.textCard,
                            {
                                flex: 1,
                            }
                        ]}
                        value={
                            balanceVisibility ? 
                            'Balance: ' +  balance.toString() + 'đ' : 
                            'Balance: ****'
                        }
                        editable={false}
                    />
                    <Text
                        style={[
                            styles.textCard,
                            {
                                flex: 1,
                                color: Colors.dark,
                                fontWeight: 'bold',
                                textAlign: 'right',
                            }
                        ]}
                    >
                        {type == 'deposit' ? '+' : '-'}{amount}đ
                    </Text>
                </View>
                <Text
                    style={styles.textCard}
                >
                    Methods of payment: {method}
                </Text>
            </View>
        </Pressable>
    )
}

export default CardTransfer

const styles = StyleSheet.create({
    containerCard: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    containerIconCard: {
        height: '62%',
        width: '20%',
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContentCard: {
        height: '75%',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingStart: 10,
    },
    textCard: {
        fontSize: 16,
        color: Colors.gray,
    }
})
