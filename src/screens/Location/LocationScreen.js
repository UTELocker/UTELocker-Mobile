import React from "react";
import { View, Text } from "react-native";
import ContentLocation from "../../components/Location/ContentLocation";
import Header from "../../components/ui/Header";

const LocationScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#F2F2F2',
            }}
        >
            <Header
                title="Location"
                buttons={{
                    isBack: false,
                    isNotification: true,
                }}
            />
            <ContentLocation />
        </View>
    )
}

export default LocationScreen;
