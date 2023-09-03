import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput } from "react-native";
import { Colors } from "../../constants/styles";

const InputForm = ({title, value, type, rules, onChangeText, options}) => {
    return (
        <View 
            styles={styles.container}
        >
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                editable={rules.editable}
                value={value}
                onChangeText={onChangeText}
                keyboardType={type === 'number' ? 'numeric' : 'default'}
                secureTextEntry={type === 'password' ? true : false}
                placeholder={options.placeholder ? options.placeholder : ''}
                onChange={options.onChange ? options.onChange : null}
            />
        </View>
    );
}

export default InputForm;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        width: '100%',
        height: 60,
        
        marginTop: 20,
        padding: 10,

        borderRadius: 10,
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.gray,
        textAlign: 'right',
    },
});