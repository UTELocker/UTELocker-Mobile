import React, {useEffect, useRef, useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import getNotifications from "../../api/notificationApi";
import { STATUS_CODE } from "../../constants/systemConstant";
import { useDispatch, useSelector } from "react-redux";
import { loadNotifications } from "../../redux/notificationSlice";
import {
    Pusher,
    PusherEvent,
} from '@pusher/pusher-websocket-react-native';

// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: false,
//         shouldSetBadge: false,
//     }),
// });

const Notification = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notification);
    const account = useSelector(state => state.auth.user);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
  
    // useEffect(() => {
    //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
    //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //     setNotification(notification);
    //   });
  
    //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //     console.log(response);
    //   });
  
    //   return () => {
    //     Notifications.removeNotificationSubscription(notificationListener.current);
    //     Notifications.removeNotificationSubscription(responseListener.current);
    //   };
    // }, []);
    
    useEffect(() => {
        const fetchNotification = async () => {
            const res = await getNotifications();
            if (res.status === STATUS_CODE.OK) {
                const data = res.data.data;
                dispatch(loadNotifications(data));
            } else {
                Alert.alert('Error', res.data.message);
            }
        };
        fetchNotification();
    }, []);

    useEffect(() => {
        const connectToPusher = async () => {
        const pusher = Pusher.getInstance();
        try {
          if (pusher.connectionState !== "CONNECTED") {
            await pusher?.init({
                apiKey: process.env.EXPO_PUBLIC_PUSHER_API_KEY,
                cluster: process.env.EXPO_PUBLIC_PUSHER_CLUSTER,
            });
  
            await pusher?.connect();
          }
          await pusher?.subscribe({
            channelName: "notification.report." + account.clientId + "." + account.id,
            onEvent: (event: PusherEvent) => async () => {
                await sendNotification();
                console.log('event', event);
            },
          });
          } catch (e) {
              console.log(`ERROR: ${e}`);
          }
        };
        connectToPusher();
      }, [])

    return (
        <View>
            <View
                style={styles.shadowView}
                elevation={10}
            >
                <TouchableOpacity
                    style={styles.buttonNotification}
                    onPress={() => navigation.navigate('Notification')}
                >
                    <Ionicons name="notifications-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            {
                notifications.notificationsCount > 0 && (
                    <View
                        style={{
                            position: 'absolute',
                            top: 4,
                            right: -5,
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            {notifications.notificationsCount > 100 ? '99+' : notifications.notificationsCount}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default Notification;

// async function sendNotification() {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "You've got mail! 📬",
//         body: 'Here is the notification body',
//         data: { data: 'goes here' },
//       },
//       trigger: { seconds: 2 },
//     });
// }

// async function registerForPushNotificationsAsync() {
//     let token;

//     if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//         });
//     }

//     // if (Device.isDevice) {
//     //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     //     let finalStatus = existingStatus;
//     //     if (existingStatus !== 'granted') {
//     //     const { status } = await Notifications.requestPermissionsAsync();
//     //     finalStatus = status;
//     //     }
//     //     if (finalStatus !== 'granted') {
//     //     alert('Failed to get push token for push notification!');
//     //     return;
//     //     }
//     //     token = (await Notifications.getExpoPushTokenAsync()).data;
//     // } else {
//     //     alert('Must use physical device for Push Notifications');
//     // }

//     return token;
// }

const styles = StyleSheet.create({
    shadowView: {
        width: 40,
        height: 40,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    buttonNotification: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
});