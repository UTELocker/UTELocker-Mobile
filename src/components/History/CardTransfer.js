import { Text, View, TextInput, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
            style={{
                width: '100%',
                height: 120,
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
            }}
            onPress={() => navigation.navigate('DetailHistory', { history: transfer, type: 'transfer' })}
        >
            <View
                style={{
                    height: '62%',
                    width: '20%',
                    borderWidth: 1,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
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
                style={{
                    height: '75%',
                    width: '80%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingStart: 10,
                }}
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
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                    }}
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
                        style={{
                            flex: 1,
                            color: Colors.gray,
                            fontSize: 16,
                        }}
                        value={balanceVisibility ? 'Balance: ' +  balance.toString() + 'đ' : 'Balance:****'}
                        editable={false}
                    />
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: Colors.dark,
                            fontWeight: 'bold',
                            textAlign: 'right',
                        }}
                    >
                        {type == 'deposit' ? '+' : '-'}{amount}đ
                    </Text>
                </View>
                <Text>
                    Methods of payment: {method}
                </Text>
            </View>
        </Pressable>
    )
}

export default CardTransfer
