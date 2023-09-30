import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/styles"
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FormBooking = ({
    locker,
    listCabinetBooked,
    date
}) => {

    const navigator = useNavigation();

    const PRICE = 100000;

    const DATA_SUCCESS = [
        {
            id: 1,
            code: 'A1',
            key: '123456',
            timeOut: 60,
        },
        {
            id: 2,
            code: 'A2',
            key: '123456',
            timeOut: 60,
        },
    ]

    const DATA_WALLET = [
        {
            title: 'Ballance',
            value: '1000000',
        },
        {
            title: 'Promotion',
            value: '0',
        },
    ]

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#EFEFEF',
                padding: 20,
            }}
        >
            <View
                style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        color: Colors.black,
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                >
                    Information Locker
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        Locker address:
                    </Text>
                    <Text>
                        {locker.address}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        List cabinet booked:
                    </Text>
                    <Text>
                        {listCabinetBooked.length}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        List cabinet address:
                    </Text>
                    <Text>
                        {listCabinetBooked.map((item, index) => {
                            return (
                                <Text
                                    key={index}
                                >
                                     {item.code}{index < listCabinetBooked.length - 1 ? ', ' : ''}
                                </Text>
                            )
                        })}
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 10,
                    }}
                >
                    Date:
                </Text>
                <View
                    style={styles.containerText}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: Colors.primary500,
                            padding:10,
                            marginBottom: 10,
                        }}
                    >
                        <View
                            style={{
                                flex:1,
                                alignItems: 'center',
                            }}
                        >
                            <Text>
                                {date.start.date}
                            </Text>
                            <Text>
                                {date.start.time}
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
                            <Text>
                                {date.end.date}
                            </Text>
                            <Text>
                                {date.end.time}
                            </Text>
                        </View>
                    </View>
                </View>
                <View 
                    style={{
                        width: '90%',
                        borderBottomColor: '#EBEBEB',
                        borderBottomWidth: 1,
                        alignSelf: 'center',
                    }}
                ></View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Sum price:
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {(listCabinetBooked.length * PRICE).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
                    </Text>
                </View>
            </View>

            <View
                style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: Colors.black,
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                >
                    Information Your Wallet
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        Ballance:
                    </Text>
                    <Text>
                        {
                            (DATA_WALLET.filter(item => item.title === 'Ballance')[0].value)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }đ
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        Promotion:
                    </Text>
                    <Text>
                        {
                            (DATA_WALLET.filter(item => item.title === 'Promotion')[0].value)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }đ
                    </Text>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        Alert.alert(
                            "Booking",
                            "Are you sure?",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "OK", onPress: () => {
                                    const sumWallet = DATA_WALLET.filter(item => item.title === 'Ballance')[0].value + 
                                                DATA_WALLET.filter(item => item.title === 'Promotion')[0].value;
                                    if (sumWallet < (listCabinetBooked.length * PRICE)) {
                                        Alert.alert(
                                            "Booking",
                                            "Your ballance is not enough!",
                                            [
                                                {
                                                    text: "OK",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                            ]
                                        );
                                        return;
                                    }
                                    navigator.reset({
                                        index: 0,
                                        routes: [
                                            { 
                                                name: 'SuccessBooking',
                                                params: {
                                                    data: DATA_SUCCESS,
                                                } 
                                            }
                                        ],
                                    });
                                    
                                }
                            }
                            ]
                        );
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Booking
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormBooking

const styles = StyleSheet.create({
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})