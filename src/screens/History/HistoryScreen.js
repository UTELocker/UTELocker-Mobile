import React from "react";
import { View, Text, Pressable } from "react-native";
import NavigationTop from "../../components/History/NavigationTop";
import { useNavigation } from "@react-navigation/native";

const HistoryScreen = () => {
    const navigator = useNavigation();
    return (
        <View
            style={{
                flex:1,
            }}
        >
            <NavigationTop />
        </View>
    )
}

export default HistoryScreen;
