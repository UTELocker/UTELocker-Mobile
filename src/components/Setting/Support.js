import React from "react";
import { Colors } from "../../constants/styles";
import { Octicons } from '@expo/vector-icons';
import CardSetting from "../ui/CardSetting";
import { View, StyleSheet, Text } from "react-native";

const Support = () => {
    const data = [
        {
            id: '1',
            title: 'Contact for comments',
            icon: <Octicons name="comment" size={24} color="black" />,
            nameTab: 'Contact',
        },
    ];

    return (
        <View
            style={styles.rootContainer}
        >
            <Text
                style={styles.title}
            >
                Support
            </Text>
            <CardSetting
                data={data}
            />
        </View>
    )
}

export default Support;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        paddingHorizontal: 20
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
