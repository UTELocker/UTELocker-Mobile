import React, { useEffect, useState, useRef } from "react";
import { ImageBackground, StyleSheet, View, Text, Animated, ScrollView, TouchableOpacity } from "react-native";
import Notification from "../ui/Notification";
import CardWallet from "./CardWallet";
import Scanner from "./Scaner";
import { Colors } from "../../constants/styles";
import { WINDOW_HEIGHT } from "../../utils/dimensionScreen";
import { useSelector } from "react-redux";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import CardBookInHome from "./CardBookInHome";


const ContentHome = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const lastOffsetY = useRef(0);
    const scrollDirection = useRef('');
    const [isShowLowerHeader, setIsShowLowerHeader] = useState(true);

    const [ orderedLockers , setOrderedLockers ] = useState([
        {
            code: 'A1',
            key: '123456',
            timeOut: '10h',
            address: '123 Nguyen Luong Bang, Da Nang',
            timesOpen: 20,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Cash',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
        {
            code: 'A2',
            key: '123456',
            timeOut: '10h',
            address: '321 Dien Bien Phu, Da Nang',
            timesOpen: 10,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Momo',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
        {
            code: 'A3',
            key: '123456',
            timeOut: '10h',
            address: '123 Nguyen Luong Bang, Da Nang',
            timesOpen: 20,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Cash',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
        {
            code: 'A4',
            key: '123456',
            timeOut: '10h',
            address: '123 Nguyen Luong Bang, Da Nang',
            timesOpen: 20,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Cash',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
        {
            code: 'A5',
            key: '123456',
            timeOut: '10h',
            address: '123 Nguyen Luong Bang, Da Nang',
            timesOpen: 20,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Cash',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
        {
            code: 'A6',
            key: '123456',
            timeOut: '10h',
            address: '123 Nguyen Luong Bang, Da Nang',
            timesOpen: 20,
            dateBooked: {
                start: {
                    date: '2021-09-20',
                    time: '10:00',
                },
                end: {
                    date: '2021-09-20',
                    time: '12:00',
                },
            },
            dateRequest: '2021-09-20 10:00',
            methodPayment: 'Cash',
            totalPrice: '100000',
            location: {
                latitude: 16.047079,
                longitude: 108.206230,
            },
        },
  
      ]);

    const account = useSelector(state => state.auth.user);

    const cardWalletAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -100],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [30, 80, 100],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
        })
    }

    const nameUserAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    }

    const iconWalletUpperHeaderAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
    }

    return (
        <View
            style={styles.rootContainer}
        >
            <View style={styles.upperHeaderPlaceholder} />
            <View
                style={[
                    styles.header,
                    {
                        zIndex: isShowLowerHeader ? 100 : 0,
                    }
                ]}
            >
            <View style={styles.upperHeader}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginTop: 10,
                    }}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: Colors.white,
                            overflow: 'hidden',
                        }}
                    >
                        <ImageBackground
                            source={require('../../../assets/images/avatar.png')}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    </View>
                    <Animated.View
                        style={[
                            {
                                marginLeft: 10,
                                justifyContent: 'center',
                            },
                            nameUserAnimation,
                        ]}
                    >
                    <Text style={[
                        styles.titleScreen,
                        {
                            color: Colors.white,
                        }
                    ]}>
                        Hello,
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: Colors.white,
                    }}>
                        {account.name}Ogata
                    </Text>
                    </Animated.View>

                </View>
                <Animated.View
                    style={[
                        {
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        },
                        iconWalletUpperHeaderAnimation,
                    ]}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => Alert.alert('Top Up')}
                    >
                        <MaterialIcons name="attach-money" size={30} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => Alert.alert('Top Up')}
                    >
                        <FontAwesome5 name="money-bill-wave" size={30} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => Alert.alert('Top Up')}
                    >
                        <MaterialIcons name="attach-money" size={30} color={Colors.white} />
                    </TouchableOpacity>
                </Animated.View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <Scanner />
                    </View>
                    <Notification />
                </View>
            </View>
            <View style={styles.lowerHeader}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        alignItems: 'center',
                        backgroundColor: Colors.primary,
                        height: 70,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                ></View>
                <Animated.View
                    style={cardWalletAnimation}
                >
                    <CardWallet wallet={
                        {
                            balance: 100000,
                            balanceDeals: 100000,
                        }
                    }/> 
                </Animated.View>
            </View>
        </View>

        <ScrollView
                ref={scrollViewRef}
                scrollEventThrottle={16}
                onScroll={e => {
                    const scrollY = e.nativeEvent.contentOffset.y;

                    scrollDirection.current = scrollY - lastOffsetY.current > 0 ? 'down' : 'up';
                    lastOffsetY.current = scrollY;

                    animatedValue.setValue(scrollY);
                    if (scrollY == 0 && !isShowLowerHeader) {
                        setIsShowLowerHeader(true)
                    } 
                    if (scrollY !== 0 && isShowLowerHeader) {
                        setIsShowLowerHeader(false)
                    }
                }}

                onScrollEndDrag={() => {
                    if (scrollDirection.current === 'up' && animatedValue._value < 160) {
                        scrollViewRef.current?.scrollTo({
                            y: 0,
                            animated: true,
                        })
                    }
                    if (scrollDirection.current === 'down' && animatedValue._value < 100) {
                        scrollViewRef.current?.scrollTo({
                            y: 160,
                            animated: true,
                        })
                    }
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.paddingForHeader} />
                <View style={styles.scrollViewContent} >
                    {
                        orderedLockers.length === 0 ? (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: Colors.dark,
                                    }}
                                >
                                    You don't have any order
                                </Text>
                            </View>
                        ) : (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: 20,
                                }}
                            >
                                {
                                    orderedLockers.map((item, index) => {
                                        return (
                                            <CardBookInHome book={item} key={item.code}/>
                                        )

                                    })
                                }
                            </View>
                        )
                    }
                </View>
        </ScrollView>
        </View>
    );
};

export default ContentHome;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        zIndex: 0,
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: Colors.primary,
        height: 260,
    },
    titleScreen: {
        fontSize: 18,
        color: Colors.dark,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    },
    upperHeader: {
        height: 100,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        paddingTop: 20,
        zIndex: 110,
        paddingHorizontal: 20,
    },
    lowerHeader: {
        height: 160,
        backgroundColor: Colors.lightGray2,
        alignItems: 'center',
        zIndex: 105,
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT + 100,
        backgroundColor: Colors.lightGray2,
    },
    paddingForHeader: {
        height: 160,
    },
    upperHeaderPlaceholder: {
        height: 100,
    },
});