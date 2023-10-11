import { Text, View } from "react-native"
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
import { useEffect } from "react";
import { useState } from "react";

const NotificationScreen = () => {

    const [ messages, setMessages ] = useState([])
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
                channelName: "notification",
                onEvent: () => {
                  console.log("Test event");
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

    return (
    <View>
        <Text>
            Notification Screen
        </Text>
        <Text>
            {
                messages.map((message, index) => (
                    <Text key={index}>
                        {message}
                    </Text>
                ))
            }
        </Text>
    </View>
    )
}

export default NotificationScreen