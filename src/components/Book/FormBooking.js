import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { Colors } from "../../constants/styles"
import { useNavigation } from "@react-navigation/native";
import ModalPlolicy from "../ui/ModalPolicy";
import { useState, useCallback, useRef } from "react";
import * as SecureStore from 'expo-secure-store';
import Button from "../ui/Button";
import DateBooked from "../ui/DateBooked";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';
  import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ContentPolicy from "./ContentPolicy";

const FormBooking = ({
    locker,
    listCabinetBooked,
    date
}) => {

    const navigator = useNavigation();


    const bottomSheetModalRef = useRef(null);

    const snapPoints = ['75%'];
  
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);

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

    const booking = () => {
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

    const handleBooking = () => {
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
                    const handleConfirm = async () => {
                        const result = await SecureStore.getItemAsync('booking');
                        handlePresentModalPress();
                        // if (result === 'true') {
                        //     booking();
                        // } else {
                        //     handlePresentModalPress();
                        // }
                    }
                    handleConfirm();
                }
            }
            ]
        );
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
            <View style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#EFEFEF',
                        padding: 20,
                    }}
                >
                    <View
                        style={styles.card}
                    >
                        <Text
                            style={styles.title}
                        >
                            Information Locker
                        </Text>
                        <View
                            style={styles.containerText}
                        >
                            <Text>
                                Locker address:
                            </Text>
                            <Text>
                                {locker.address}
                            </Text>
                        </View>
                        <View
                            style={styles.containerText}
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
                                marginVertical: 10,
                            }}
                        >
                            Date:
                        </Text>
                        <DateBooked
                            date={date}
                        />
                        <View 
                            style={styles.containerDate}
                        ></View>
                        <View
                            style={styles.containerText}
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
                        style={styles.card}
                    >
                        <Text
                            style={styles.title}
                        >
                            Information Your Wallet
                        </Text>
                        <View
                            style={styles.containerText}
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
                            style={styles.containerText}
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


                <Button
                    title={'Booking'}
                    onPress={handleBooking}
                    styleButton={styles.button}
                />
            
                </View>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={0}
                        snapPoints={snapPoints}
                    >
                    <View style={{
                        flex: 1,
                        backgroundColor: 'red',
                    }}>
                        <ContentPolicy
                            title={'Policy'}
                            content={
                                "Please read and confirm the policy before booking.     \n1. The booking time is 60 minutes.    \n2. If the time is over, you will be charged an additional fee.    \n3. If you cancel the booking, you will be charged a cancellation fee.     \n4. If you have any questions, please contact us."
                            }
                            onClose={() => {
                                navigator.navigate('Home');
                            }}
                            onConfirm={() => {
                                booking();
                            }}
                            code={'booking'}
                        />
                    </View>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default FormBooking

const styles = StyleSheet.create({
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleButton: {
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginHorizontal: 20,
        height: 50,
        flex: 1,
        justifyContent: 'center',
    },
    containerText: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 20,
    },
    containerDate: {
        width: '90%',
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    containerDateBooking: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.primary500,
        padding:10,
        marginBottom: 10,
    }
})