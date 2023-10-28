import { Text, View } from "react-native"
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const NotificationScreen = () => {
    const [ messages, setMessages ] = useState([])
    const account = useSelector(state => state.auth.user);
    const navigation = useNavigation();

    useEffect(() => {
            const connectToPusher = async () => {
            const pusher = Pusher.getInstance();
            try {
              if (pusher.connectionState !== "CONNECTED") {
                await pusher?.init({
                    apiKey: "4d00bbd9faf873abcbaf",
                    cluster: "ap1",
                });
      
                await pusher?.connect();
              }
              await pusher?.subscribe({
                channelName: "notification.report." + account.clientId + "." + account.id,
                onEvent: (event: PusherEvent) => {
                  setMessages((messages) => [...messages, "Test event"]);
                },
              });
            } catch (e) {
                console.log(`ERROR: ${e}`);
                setMessages((messages) => [...messages, `ERROR: ${e}`]);
            }
          };
      
          connectToPusher();
    }, [])

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

    return (
    <View>
        <Text>
            Notification Screen
        </Text>
    </View>
    )
}

export default NotificationScreen