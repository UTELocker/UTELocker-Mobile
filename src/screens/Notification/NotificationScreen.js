import { Text, View } from "react-native"
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const NotificationScreen = () => {
    const navigation = useNavigation();


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