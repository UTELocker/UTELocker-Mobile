import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { cancelBooking, openLockerBooking } from "../../api/bookingApi";
import { Alert } from "react-native";

const CardBookInHome = ({ book, setRefresh }) => {
    const navigation = useNavigation();
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const [isShow, setIsShow] = React.useState(false);
    const animatedCardStyle = {
        height: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 300],
        }),
    };

    const calTimeOut = (dateStart, dateEnd) => {
        const dateStartArr = dateStart.date.split("-");
        const timeStartArr = dateStart.time.split(":");
        const dateEndArr = dateEnd.date.split("-");
        const timeEndArr = dateEnd.time.split(":");
        const dateStartObj = new Date(dateStartArr[0], dateStartArr[1], dateStartArr[2], timeStartArr[0], timeStartArr[1], timeStartArr[2]);
        const dateEndObj = new Date(dateEndArr[0], dateEndArr[1], dateEndArr[2], timeEndArr[0], timeEndArr[1], timeEndArr[2]);
        const timeOut = dateEndObj - dateStartObj;
        const days = Math.floor(timeOut / (1000 * 60 * 60 * 24));
        const hours = days * 24 + Math.floor((timeOut % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeOut % (1000 * 60 * 60)) / (1000 * 60));
        return hours + ":" + minutes;
    }


    const handleCancelBooking = async (id) => {
        Alert.alert(
            "Cancel booking",
            "Are you sure you want to cancel this booking?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        const callApiCancelBooking = async () => {
                            const response = await cancelBooking(id);
                            if (response.status === 200) {
                                Alert.alert(
                                    "Cancel booking",
                                    "Cancel booking successfully",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => {
                                                setRefresh(true);
                                            },
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            } else {
                                Alert.alert(
                                    "Cancel booking",
                                    "Cancel booking failed",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => navigation.navigate("Home"),
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }
                        callApiCancelBooking();
                    }
                }
            ],
            { cancelable: false }
        );
    }

    const openLocker = async (id) => {
        Alert.alert(
            "Open Locker",
            "Are you sure you want to open this locker?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        const callApiOpenLocker = async () => {
                            const response = await openLockerBooking(id);
                            if (response.status === 200) {
                                Alert.alert(
                                    "Open Locker",
                                    "Open Locker successfully",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => {
                                                setRefresh(true);
                                            },
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            } else {
                                Alert.alert(
                                    "Open Locker",
                                    "Open Locker failed",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => navigation.navigate("Home"),
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }
                        callApiOpenLocker();
                    }
                }
            ],
            { cancelable: false }
        );
    }
    
    return (
        <Animated.View
            style={[
                styles.cardContainer,
                animatedCardStyle,
            ]}
            onPress={() => navigation.navigate("DetailLocker", {
                data: book,
            })}
        >
            <View style={styles.content}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.code}>{book.code}</Text>
                    <MaterialCommunityIcons name="locker-multiple" size={50} color="black" />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', paddingLeft: 10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.gray}}>
                        { book.lockerCode }
                    </Text>
                    <View
                        style={styles.containerCode}
                    >
                        <Text style={styles.containerPassword}>
                            Key: <Text style={styles.password}>{book.pin_code}</Text>
                        </Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text>
                            Remaining
                        </Text>
                        <Text style={{ color: Colors.green, marginLeft: 5 }}>
                            { calTimeOut(book.dateBooked.start, book.dateBooked.end) }
                        </Text>
                    </View>
                    <Text style={{ fontWeight: '300', color: Colors.gray}}>
                        { book.address }
                    </Text>
                </View>
                <TouchableOpacity 
                    style={{ flex: 2, justifyContent: 'center', alignItems:'center'}}
                    onPress={() => openLocker(book.id)}
                >
                    <View
                        style={{
                            height: 80,
                            width: 80,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 40,
                            backgroundColor: Colors.primary
                        }}
                    >
                        <MaterialIcons 
                            name="lock-outline" 
                            size={50} 
                            color="white" 
                        />
                    </View>
                    <View>
                        <Text>
                            Click to open
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.footer}
                onPress={() => {
                    Animated.timing(animatedValue, {
                        toValue: isShow ? 0 : 1,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                    setIsShow(!isShow);
                }}
            >
                    <MaterialIcons 
                        name={
                            isShow ? 'keyboard-arrow-down':
                            'keyboard-arrow-right'
                        }
                        size={24}
                        color="black"
                        />                
                    <Text
                        style={{
                            marginLeft: 10,
                        }}
                    >
                    Locker settings
                </Text>
            </TouchableOpacity>
            {
                isShow && (
                    <View
                        style={{
                            paddingHorizontal: 10,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                backgroundColor: Colors.primary,
                            }}
                            onPress={() => navigation.navigate("DetailLocker", {
                                data: book,
                            })}
                        >
                            <Text
                            style={{
                                color: Colors.white,
                                fontWeight: 'bold',
                            }}
                            >
                                Detail
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                marginTop: 10,
                                backgroundColor: Colors.gray,
                            }}
                            onPress={() => handleCancelBooking(book.id)}
                        >
                            <Text
                            style={{
                                color: Colors.white,
                                fontWeight: 'bold',
                            }}
                            >
                                End booking
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 200,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    password: {
        fontSize: 28,
        color: Colors.blue,
    },
    containerPassword: {
        fontSize: 20,
        fontWeight: "500",
    },
    code: {
        fontSize: 24,
        fontWeight: "bold",
        
    },
    iconRandom: {
        fontWeight: "bold",
        paddingRight: 20,
    },
    timeOutGreen: {
        fontWeight: "bold",
        color: Colors.green,
    },
    timeOutRed: {
        fontWeight: "bold",
        color: Colors.red,
    },
    containerCode: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    footer: {
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderTopColor: Colors.lightGray2,
        borderTopWidth: 1,
    },
    content: {
        height: 160,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
});

export default CardBookInHome;