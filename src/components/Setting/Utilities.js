import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Utilities = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.rootContainer}
        >
            <Text
                style={styles.title}
            >
                Utilities
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SettingsRule');
                    }}
                    style={styles.cardContainer}
                >
                    <MaterialIcons name="security" size={35} color={Colors.green} />
                    <Text
                        style={styles.textCard}
                    >
                        Rules
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Utilities;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        padding: 20,
    },
    cardContainer: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        width: '48%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textCard: {
        fontSize: 16,
        marginTop: 10,
    }
});

