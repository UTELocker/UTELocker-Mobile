import { Pressable, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

const CardBooking = ({ booking }) => {
    const { id, address, locker, date, status, price, time } = booking;
    const navigation = useNavigation();
    return (
        <Pressable
            style={{
                width: '100%',
                height: 160,
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
            }}
            onPress={() => navigation.navigate('DetailHistory', { history: booking, type: 'booking' })}
        >
            <View
                style={{
                    height: '60%',
                    width: '25%',
                    borderWidth: 1,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <MaterialCommunityIcons 
                    name="locker" 
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
                    width: '75%',
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
                    {locker}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                    }}
                >
                    {address}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 10,
                        backgroundColor: Colors.lightGray,
                        padding:10
                    }}
                >
                    <View
                        style={{
                            flex:1,
                            alignItems: 'center',
                        }}
                    >
                        <Text>
                            {time.start.date}
                        </Text>
                        <Text>
                            {time.start.time}
                        </Text>
                    </View>
                    <Text
                        style={{
                            flex:1,
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        -
                    </Text>
                    <View
                        style={{
                            flex:1,
                            alignItems: 'center',
                        }}
                    >
                        {
                            time.end.date !== '' ? (
                                <>
                                    <Text>
                                        {time.end.date}
                                    </Text>
                                    <Text>
                                        {time.end.time}
                                    </Text>
                                </>
                            ) : (
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: Colors.gray,
                                    }}
                                >
                                    Not yet
                                </Text>
                            )
                        }
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                    }}
                >
                    Price: {price}đ
                </Text>
            </View>
        </Pressable>
    )
}

export default CardBooking
