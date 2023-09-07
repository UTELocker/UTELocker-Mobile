import React from "react";
import { View, Text } from "react-native";
import HeaderLocation from "../components/Location/HeaderLocation";
import ContentLocation from "../components/Location/ContentLocation";

const LocationScreen = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F2F2F2',
            }}
        >
            <HeaderLocation />
            <ContentLocation />
        </View>
    )
}

export default LocationScreen;
