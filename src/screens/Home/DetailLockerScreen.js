import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from "react-native";
import { Colors } from "../../constants/styles";
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import Header from "../../components/ui/Header";
import DateBooked from "../../components/ui/DateBooked";
import MapShowLocation from "../../components/ui/MapShowLocation";
import Button from "../../components/ui/Button";
import { cancelBooking } from "../../api/bookingApi";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailLockerScreen = ({route}) => {

    const navigation = useNavigation();
    const { 
        data,
    } = route.params;

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: "none"
            }
          });
          return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
          });
    }, []);

    const DATA = [
        {
            title: 'Address',
            content: data.address,
        },
    ]

    const DATA_BOOKED = [
        {
            title: 'Code',
            content: data.code,
        },
        {
            title: 'Date booked',
            content: data.dateBooked,
        },
        {
            title: 'Date Request',
            content: data.dateRequest,
        },
        {
            title: 'Payment',
            content: 'UTE Pay',
        },
        {
            title: 'Total Price',
            content: data.totalPrice,
        },
    ]

    const openGGMap = (location) => {
        const lat = location.latitude;
        const lng = location.longitude;
        const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lng}`;
        const label = 'Locker';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }

    const handleCancelBooking = (id) => {
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
                                            onPress: () => navigation.navigate("Home"),
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
                                            onPress: () => {},
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

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header
                title="Booking Summary"
                buttons={{
                    isBack: true,
                }}
            />

            <ScrollView 
                contentContainerStyle={styles.content}
            >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={styles.containerKey}
                    >
                        <Text style={styles.key}>{
                            data.pin_code.split('').join(' ')
                        }</Text>
                    </View>
                </View>
                <View
                    style={styles.containerButton}
                >
                    <TouchableOpacity style={styles.buttonUntil}>
                        <AntDesign name="copy1" size={30} color={Colors.gray} />                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonUntil}
                    >
                        <Feather style={styles.iconRandom} name="refresh-ccw" size={30} color={Colors.blue} />                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUntil}
                        onPress={() => handleCancelBooking(data.id)}
                    >
                        <AntDesign style={styles.iconRandom} name="delete" size={30} color={Colors.red} />                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUntil}>
                        <AntDesign name="warning" size={30} color="yellow" />   
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.containerForm}
                >
                    <Text
                        style={{
                            marginBottom: 10,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.dark,
                        }}
                    >
                        Locker's detail
                    </Text>
                    {
                        DATA_BOOKED.map((item, index) => {
                            if (item.content?.end !== undefined) {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                                flexDirection: 'column',
                                                marginBottom: 10,
                                            }}
                                    >
                                        <Text style={[
                                            styles.titleForm,
                                            {
                                                flex: 1,
                                                marginBottom: 10,
                                            }
                                        ]}>{item.title}</Text>
                                        <View>
                                            <DateBooked
                                                date={item.content}
                                            />
                                        </View>
                                    </View>
                                )
                            }
                            return (
                                <View
                                    key={index}
                                    style={styles.containerText}
                                >
                                    <Text style={styles.titleForm}>{item.title}</Text>
                                    <Text style={styles.input}>{item.content}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View
                    style={styles.containerForm}
                >
                    <Text
                        style={{
                            marginBottom: 10,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.dark,
                        }}
                    >
                        Locker's location
                    </Text>
                    {
                        DATA.map((item, index) => (
                            <View
                                key={index}
                                style={styles.containerText}
                            >
                                <Text style={styles.titleForm}>{item.title}</Text>
                                <Text style={styles.input}>{item.content}</Text>
                            </View>
                        ))
                    }
                    <View>
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            marginBottom: 20,
                        }}
                    >
                        <MapShowLocation
                            location={data.location}
                        />
                    </View>
                    <Button
                        title="Direction"
                        onPress={() => openGGMap(data.location)}
                        styleButton={{
                            backgroundColor: Colors.blue,
                        }}
                        styleText={{
                            color: Colors.white,
                        }}
                        icon={
                            <FontAwesome name="map-marker" size={24} color="white" />
                        }
                    />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailLockerScreen;

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        paddingHorizontal: 20,
        color: Colors.gray,
        paddingVertical: 30,
    },
    containerKey: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: Colors.white,
        alignItems: 'center',
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    key: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.blue,
    },
    buttonUntil: {
        width: '90%',
        height: 60,
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    containerForm: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: 20,
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    titleForm: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary500,
        flex: 4,
    },
    input: {
        fontSize: 20,
        color: Colors.gray,
        textAlign: 'left',
        flex: 6,
        marginLeft: 5,
    },
    containerText: { 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    containerButton: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})