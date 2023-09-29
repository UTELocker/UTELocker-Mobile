import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const CardBookSuccess = ({ book }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("DetailLocker", {
                code: book.code,
                key: book.key,
                timeOut: book.timeOut,
            })}
        >
            <View style={styles.content}>
                <Text style={styles.code}>{book.code}</Text>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            flex: 4,
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <Text style={styles.containerPassword}>
                            Key: <Text style={styles.password}>{book.key}</Text>
                        </Text>
                        <Pressable 
                            onPress={() => alert('Copy password')}
                        >
                            <AntDesign name="copy1" size={30} color={Colors.gray} />                        
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.time}>Time remaining: <Text style={book.timeOut <= 0 ? styles.timeOutRed : styles.timeOutGreen}>{book.timeOut}</Text></Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: Colors.primary100,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        flex:1,
        justifyContent: 'center',
    },
    password: {
        fontSize: 30,
        color: Colors.blue,
    },
    containerPassword: {
        fontSize: 20,
    },
    code: {
        fontSize: 16,
        fontWeight: "bold",
    },
    iconRandom: {
        fontWeight: "bold",
        paddingRight: 20,
    },
    timeOutGreen: {
        fontWeight: "bold",
        color: Colors.green,
    },
    timeOutRed: {
        fontWeight: "bold",
        color: Colors.red,
    },
});

export default CardBookSuccess;