import { useEffect, useState } from "react"
import { 
    View, 
    Text, 
    ScrollView, 
    TouchableOpacity, 
    Alert, 
    StyleSheet, 
    Dimensions 
} from "react-native"
import { TYPE_LOCKER } from "../../constants/typeLocker"
import STATUS_LOCKER from "../../constants/statusBooking"
import { Colors } from "../../constants/styles"
import { useNavigation } from "@react-navigation/native"
import Button from "../ui/Button"


const LockerSimulation = ({
    locker,
    date
}) => {

    const navigation = useNavigation();

    const [data, setData] = useState([])

    const PRICE = 100000;
    const LIMIT = 2;
    useEffect(() => {
        const DATA = [
            [
                {
                    id: 1,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.AVAILABLE,
                    code: 'A1',
                },
                {
                    id: 2,
                    type: TYPE_LOCKER.EMPTY,
                    status: STATUS_LOCKER.UNAVAILABLE,
                    code: 'Empty',
                },
                {
                    id: 3,
                    type: TYPE_LOCKER.CPU,
                    status: STATUS_LOCKER.UNAVAILABLE,
                    code: 'CPU',
                },
            ],
            [
                {
                    id: 4,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.AVAILABLE,
                    code: 'A2',
                },
                {
                    id: 5,
                    type: TYPE_LOCKER.EMPTY,
                    status: STATUS_LOCKER.UNAVAILABLE,
                    code: 'Empty',
                },
                {
                    id: 6,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A2',
                },
                {
                    id: 7,
                    type: TYPE_LOCKER.EMPTY,
                    status: STATUS_LOCKER.UNAVAILABLE,
                    code: 'Empty',
                },
                {
                    id: 8,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A2',
                },
                {
                    id: 9,
                    type: TYPE_LOCKER.EMPTY,
                    status: STATUS_LOCKER.UNAVAILABLE,
                    code: 'Empty',
                },
            ],
            [
                {
                    id: 12,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 13,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 14,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 15,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 16,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 17,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 18,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 19,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 20,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A3',
                },
            ],
            [
                {
                    id: 21,
                    type: TYPE_LOCKER.SLOT,
                    status: STATUS_LOCKER.BOOKED,
                    code: 'A21',
                },
            ],

        ]
        DATA.forEach((item) => {
            item.forEach((item) => {
                item.isBooked = false
            })
        })
        setData(DATA)
    }, [])

    const handleClickCabinet = (data, lockerId) => {
        const sumBooked = getSumBooked(data)
        const isCheck = data.some((item) => {
            return item.some((item) => {
                return item.id === lockerId && item.isBooked
            })
        })
        if (LIMIT === sumBooked && !isCheck) {
            Alert.alert(
                'Warning',
                `You can only book ${LIMIT} cabinets`,
                [
                    {
                        text: 'OK',
                        onPress: () => {}
                    }
                ],
                { cancelable: false }
            )
            return
        }
        const newData = data.map((item) => {
            return item.map((item) => {
                if (item.id === lockerId) {
                    item.isBooked = !item.isBooked
                }
                return item
            })
        })

        setData(newData)
    }

    const getNumHigherInRow = (data) => {
        let max = 0
        data.forEach((item) => {
            if (item.length > max) {
                max = item.length
            }
        })
        return max
    }

    const handleNextStep = () => {
        const listCabinetBooked = getCabinetBooked(data)
        if (listCabinetBooked.length === 0) {
            Alert.alert(
                'Warning',
                `You must select at least 1 cabinet`,
                [
                    {
                        text: 'OK',
                        onPress: () => {}
                    }
                ],
                { cancelable: false }
            )
            return
        }
        navigation.navigate('FormBooking', {
            locker: locker,
            listCabinetBooked: listCabinetBooked,
            date: date,
        })
    }
    
    const getBackgroundColor = (status) => {
        switch (status) {
            case STATUS_LOCKER.AVAILABLE:
                return Colors.green
            case STATUS_LOCKER.BOOKED:
                return Colors.orange
            case STATUS_LOCKER.UNAVAILABLE:
                return '#ddd'
            default:
                return '#fff'
        }
    }
    
    const handleRenderLocker = (data) => {
        const maxNumInRow = getNumHigherInRow(data);
        const windowWidth = Dimensions.get('window').width;
        const widthItem = (windowWidth - 40 - (maxNumInRow - 1) * 10) / maxNumInRow;
        const sumWidth = maxNumInRow * widthItem + (maxNumInRow - 3) * 10;

        return data.map((item, index) => {
            const numInRow = item.length;
            const itemWidth = maxNumInRow > numInRow ? ((sumWidth / numInRow) - (numInRow - 3) * 10 ): widthItem;

            return (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}
                >
                    {item.map((item, index) => {

                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: itemWidth,
                                    height: widthItem + 10,
                                    backgroundColor: getBackgroundColor(item.status),
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 5,
                                    opacity: item.isBooked ? 1 : 0.5,
                                }}
                                onPress={() => {
                                    if (item.status === STATUS_LOCKER.AVAILABLE) {
                                        handleClickCabinet(data, item.id)
                                    }
                                }}

                                disabled={item.status !== STATUS_LOCKER.AVAILABLE}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {item.code}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )
        })
    }

    const getSumBooked = (data) => {
        let sum = 0
        data.forEach((item) => {
            item.forEach((item) => {
                if (item.isBooked) {
                    sum++
                }
            })
        })
        return sum
    }

    const getCabinetBooked = (data) => {
        const listCabinetBooked = []
        data.forEach((item) => {
            item.forEach((item) => {
                if (item.isBooked) {
                    listCabinetBooked.push(item)
                }
            })
        })
        return listCabinetBooked
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingVertical: 20,
            }}
        >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                    marginBottom: 20,
                }}
            >
                <View
                    style={{
                        flex: 5,
                        paddingHorizontal: 20,
                    }}
                >
                    {
                        data && handleRenderLocker(data)
                    }
                </View>
                <View
                    style={{
                        paddingTop: 250,
                    }}
                ></View>
            </ScrollView>
            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    paddingTop: 20,
                    height: 250,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: Colors.green,
                                borderRadius: 10,
                                marginRight: 5,
                            }}
                        />
                        <Text>Available</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: Colors.orange,
                                borderRadius: 10,
                                marginRight: 5,
                            }}
                        />
                        <Text>Booked</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: '#ddd',
                                borderRadius: 10,
                                marginRight: 5,
                            }}
                        />
                        <Text>
                            Unavailable
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 3,
                        margin: 20,
                        paddingHorizontal:10,
                        paddingTop: 20,
                        // backgroundColor: Colors.grayDark,
                        borderRadius: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={[
                                styles.textInfoTitle,
                                {
                                    marginBottom: 10,
                                }
                            ]}
                        >
                            Selected lockers
                        </Text>
                        <Text
                            style={styles.textInfoValue}
                        >
                            {data && getSumBooked(data)}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={styles.textInfoTitle}
                        >
                            Total price
                        </Text>
                        <Text
                            style={styles.textInfoValue}
                        >
                            {(getSumBooked(data) * PRICE).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
                        </Text>
                    </View>
                </View>
                
                <Button
                    title="Next step"
                    onPress={handleNextStep}
                    styleButton={{
                        backgroundColor: Colors.primary,
                        marginHorizontal: 20,
                        flex: 1,
                    }}
                />
            </View>
        </View>
    )
}

export default LockerSimulation

const styles = StyleSheet.create({
    textInfoTitle: {
        fontSize: 20,
        color: Colors.dark,
    },
    textInfoValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.orange,
    },
})