import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from '@expo/vector-icons';
import Header from "../../components/ui/Header";
import DateBooked from "../../components/ui/DateBooked";
import MapShowLocation from "../../components/ui/MapShowLocation";
import { Linking } from "react-native";

const DetailLockerScreen = ({route}) => {

    const { 
        data,
    } = route.params;

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
            content: data.methodPayment,
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
                            data.key.split('').join(' ')
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
                        onPress={() => {

                        }}
                    >
                        <Feather style={styles.iconRandom} name="refresh-ccw" size={30} color={Colors.blue} />                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUntil}>
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
                    <TouchableOpacity
                        onPress={() => {
                            openGGMap(data.location)
                        }}
                        style={{
                            paddingHorizontal: 20,
                            backgroundColor: Colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                            paddingVertical: 10,
                            borderRadius: 10
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.white,
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                        >
                            Direction
                        </Text>
                    </TouchableOpacity>
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