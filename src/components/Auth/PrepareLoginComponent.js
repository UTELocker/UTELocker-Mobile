import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";
import Button from "./Button";
import Input from "./Input";


const PrepareLoginComponent = ({
    onPress,
    setEmail,
}) => {
    return (
        <>
            <Input
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
                placeholder={'Enter your email'}
                onUpdateValue={setEmail}
            />
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Create an account');
                }}
                style={{
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                        marginTop: 10,
                    }}
                >
                    Create an new account
                </Text>
            </TouchableOpacity>
            <Button
                title="Login"
                onPress={onPress}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={styles.line}
                ></View>
                <Text
                    style={{
                        fontSize: 20,
                        color: Colors.gray,
                        marginHorizontal: 10,
                    }}
                >
                    Or
                </Text>
                <View
                    style={styles.line}
                ></View>
            </View>
            <Button
                title="Login with Google"
                onPress={() => {
                    Alert.alert('Login with Google');
                }}
                color={Colors.gray}
            />
        </>
    )
};

export default PrepareLoginComponent;

const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        backgroundColor: Colors.dark,
        width: '40%',
        height: 1,
    }
});