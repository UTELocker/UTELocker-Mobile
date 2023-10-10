import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.shadowView}
            elevation={10}
        >
            <TouchableOpacity
                style={styles.buttonNotification}
                onPress={() => navigation.navigate('Notification')}
            >
                <Ionicons name="notifications-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    shadowView: {
        width: 40,
        height: 40,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    buttonNotification: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
});