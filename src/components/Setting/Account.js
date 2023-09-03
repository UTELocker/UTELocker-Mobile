import React from "react";
import { Colors } from "../../constants/styles";
import { Octicons } from '@expo/vector-icons';
import CardSetting from "../ui/CardSetting";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Account = () => {
    const data = [
        {
            id: '1',
            title: 'personal Information',
            icon: <MaterialCommunityIcons name="account-eye-outline" size={24} color="black" />,
            nameTab: 'Account',
        },
        {
            id: '2',
            title: 'Settings',
            icon: <Feather name="settings" size={24} color="black" />,
            nameTab: 'SettingApp',
        },
        {
            id: '3',
            title: 'Logout',
            icon: <SimpleLineIcons name="logout" size={24} color="black" />,
            nameTab: 'Logout',
        },
    ];

    return (
        <View
            style={styles.rootContainer}
        >
            <Text
                style={styles.title}
            >
                Account
            </Text>
            <CardSetting
                data={data}
            />
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
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
