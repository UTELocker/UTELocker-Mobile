import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";

const Button = ({
    title,
    onPress,
    color = Colors.primary,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: color,
                }
            ]}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: Colors.white
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
};

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '80%',
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    }
});