import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";
import { getNotifications, readNotification } from "../../api/notificationApi";
import { useDispatch, useSelector } from "react-redux";
import { getLabelNotificationType } from "../../utils/filter";
import { NOTIFICATION_STATUS, NOTIFICATION_TYPE } from "../../constants/notificationConstant";
import { Ionicons } from '@expo/vector-icons'; 
import { setStatus } from "../../redux/notificationSlice";
import { STATUS_CODE } from "../../constants/systemConstant";
import { Alert } from "react-native";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DetailNotification from "./DetailNotification";

const ListNotification = ({ filterChoice }) => {
    const notifications = useSelector((state) => state.notification.notifications);
    const notificationsPayment = useSelector((state) => state.notification.notificationsPayment);
    const notificationsBooking = useSelector((state) => state.notification.notificationsBooking);   
    const [filterNotifications, setFilterNotifications] = useState([]);
    const [notificationChoice, setNotificationChoice] = useState();
    const dispatch = useDispatch();

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ['75%'];
  
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);

    useEffect(() => {
        switch (filterChoice) {
            case NOTIFICATION_TYPE.PAYMENT:
                setFilterNotifications(notificationsPayment);
                break;
            case NOTIFICATION_TYPE.BOOKING:
                setFilterNotifications(notificationsBooking);
                break;
            default:
                setFilterNotifications(notifications);
                break;
        }
    }, [filterChoice, notifications, notificationsPayment, notificationsBooking]);

    const renderIcon = (type) => {
        switch (type) {
            case NOTIFICATION_TYPE.PAYMENT:
                return (
                    <Ionicons name="wallet-outline" size={24} color="yellow" />
                );
            case NOTIFICATION_TYPE.BOOKING:
                return (
                    <Ionicons name="calendar-outline" size={24} color="green" />
                );
            case NOTIFICATION_TYPE.REPORT:
                return (
                    <Ionicons name="warning-sharp" size={24} color="red" />
                );
            default:
                return (
                    <Ionicons name="notifications-outline" size={24} color="black" />
                );
        }
    }

    const handleReadNotification = async (id) => {
        const res = await readNotification(id);
        if (res.status === STATUS_CODE.OK) {
            dispatch(setStatus ({
                id: id,
                status: NOTIFICATION_STATUS.READ,
            }));
        } else {
            Alert.alert('Error', res.data.message);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    handleReadNotification(item.id);
                    handlePresentModalPress();
                    setNotificationChoice(item);
                }}
            >
                <View style={styles.itemLeft}>
                    <View style={styles.avatar}>
                        {
                            renderIcon(item.type)
                        }
                    </View>
                </View>
                <View style={styles.itemCenter}>
                    <Text style={styles.title}>{
                        getLabelNotificationType(item.type)
                    }</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <Text style={styles.time}>
                        {item.created_at}
                    </Text>
                </View>
                <View style={styles.itemRight}>
                    {
                        item.status === NOTIFICATION_STATUS.UNREAD && (
                            <View style={styles.dotActive} />
                        )
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ flex: 12 }}>
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
                        <FlatList
                            data={filterNotifications}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => (
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text>No notification</Text>
                                </View>
                            )}
                        />
                    </View>
                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={0}
                            snapPoints={snapPoints}
                        >
                        <View style={{
                            flex: 1,
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                            }}>
                                Notification {notificationChoice && notificationChoice.type}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: Colors.gray,
                                marginBottom: 10,
                            }}
                            >
                                {notificationChoice && notificationChoice.created_at}
                            </Text>
                                
                            <Text style={{
                                fontSize: 16,
                                marginBottom: 10,
                            }}>
                                {notificationChoice && notificationChoice.content}
                            </Text>
                            <DetailNotification notification={notificationChoice} />
                        </View>
                        </BottomSheetModal>
                    </View>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </View>
    )
}

export default ListNotification

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray2,
    },
    itemLeft: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.lightGray2,
    },
    itemCenter: {
        flex: 10,
        paddingLeft: 30,
    },
    itemRight: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        fontSize: 14,
        color: Colors.darkGray,
    },
    time: {
        fontSize: 12,
        color: Colors.darkGray,
    },
    shadowView: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    buttonNotification: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 10,
    },
    btnFilter: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: Colors.primary,
        marginHorizontal: 5,
    },
    labelFilter: {
        color: Colors.white,
        fontWeight: "bold",
    },
    dotActive: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: Colors.primary,
    },
});
