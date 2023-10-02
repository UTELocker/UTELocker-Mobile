import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Utilities from "../../components/Setting/Utilities";
import Notification from "../../components/ui/Notification";
import { Colors } from "../../constants/styles";
import Support from "../../components/Setting/Support";
import Account from "../../components/Setting/Account";
import Header from "../../components/ui/Header";

const SettingScreen = () => {
    return (
        <View
            style={styles.rootContainer}
        >
            <Header
                title="Setting"
                buttons={{
                    isBack: false,
                    isNotification: true,
                }}
            />
            <Utilities />
            <Support />
            <Account />
        </View>
    )
};

export default SettingScreen;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        height: '100%',
        marginBottom: 70,
        backgroundColor: '#F2F2F2',
    },
    buttonNotification: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingTop: 20,
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blue,
        paddingHorizontal: 20,
    },
});
