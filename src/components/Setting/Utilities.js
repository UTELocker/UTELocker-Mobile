import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const Utilities = () => {
    return (
        <View
            style={styles.rootContainer}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10,
                }}
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
                    onPress={() => alert('History')}
                    style={styles.cardContainer}
                >
                    <Ionicons name="document-text-outline" size={35} color={Colors.blue} />
                    <Text
                        style={{
                            fontSize: 16,
                            marginTop: 10,
                        }}
                    >
                        History
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('Rules')}
                    style={styles.cardContainer}
                >
                    <MaterialIcons name="security" size={35} color={Colors.green} />
                    <Text
                        style={{
                            fontSize: 16,
                            marginTop: 10,
                        }}
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
});

