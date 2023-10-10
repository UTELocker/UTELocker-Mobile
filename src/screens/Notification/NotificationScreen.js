import { Text, View } from "react-native"
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
import { useEffect } from "react";

const NotificationScreen = () => {
    
    const pusher = Pusher.getInstance();

    useEffect(() => {
        const setUp = async () => {
            await pusher.init({
                apiKey: "4d00bbd9faf873abcbaf",
                cluster: "ap1"
            });
                
            await pusher.connect();
            await pusher.subscribe({
                channelName: "notification", 
                onEvent: (event: PusherEvent) => {
                console.log(`Event received: ${event}`);
                }
            });
        }
        if (pusher) {
            setUp();
        }
    }, [])

    return (
    <View>
        <Text>
            Notification Screen
        </Text>
    </View>
    )
}

export default NotificationScreen