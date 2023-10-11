import { Text, View } from "react-native"
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
import { useEffect, useState } from "react";

const NotificationScreen = () => {

    const [ messages, setMessages ] = useState([])
    const [ pusherState, setPusherState ] = useState(0);
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
                  setPusherState(1);
                },
              });
            } catch (e) {
                console.log(`ERROR: ${e}`);
                setMessages((messages) => [...messages, `ERROR: ${e}`]);
                setPusherState(2);
            }
          };
      
          connectToPusher();
    }, [])

    const handleState = (state) => {
        switch (state) {
            case 0:
                return "grey"
            case 1:
                return "green"
            case 2:
                return "red"
        }
    }
    return (
    <View>
        <Text>
            Notification Screen
        </Text>
        <View 
            style={{
                height: 120,
                width: "100%",
                backgroundColor: handleState(pusherState)
            }}
        />
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