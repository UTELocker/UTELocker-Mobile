import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const CardBookInHome = ({ book }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("DetailLocker", {
                data: book,
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
                        style={styles.containerCode}
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
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Pressable 
                            onPress={() => alert('Random new password')}
                        >
                            <Feather style={styles.iconRandom} name="refresh-ccw" size={30} color={Colors.blue} />                      
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.time}>Time remaining: <Text style={book.timeOut <= 0 ? styles.timeOutRed : styles.timeOutGreen}>{book.timeOut}</Text></Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
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
    containerCode: {
        flex: 4,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    }
});

export default CardBookInHome;