import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from '@expo/vector-icons';
import Header from "../../components/ui/Header";

const DetailLockerScreen = ({route}) => {
    const navigation = useNavigation();
    const { code, key, timeOut } = route.params;
    const [locker, setLocker] = useState({
        code: '',
        key: '',
        timeOut: '',
    });

    useEffect(() => {
        setLocker({
            code: code,
            key: key,
            timeOut: timeOut,
            timesOpen: 20,
        })
    }, [])

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header
                title="Detail Locker"
                buttons={{
                    isBack: true,
                }}
            />

            <View style={styles.content}>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={styles.containerKey}
                    >
                        <Text style={styles.key}>{locker.key}</Text>
                    </View>
                </View>
                <View
                    style={styles.containerButton}
                >
                    <TouchableOpacity style={styles.buttonUntil}>
                        <AntDesign name="copy1" size={30} color={Colors.gray} />                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonUntil}
                        onPress={() => {

                        }}
                    >
                        <Feather style={styles.iconRandom} name="refresh-ccw" size={30} color={Colors.blue} />                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUntil}>
                        <AntDesign style={styles.iconRandom} name="delete" size={30} color={Colors.red} />                      
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.containerForm}
                >
                    <View style={styles.containerText}>
                        <Text style={styles.titleForm}>Code:</Text>
                        <Text style={styles.input}>{locker.code}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.titleForm}>Time out:</Text>
                        <Text style={styles.input}>{locker.timeOut}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.titleForm}>Times open:</Text>
                        <Text style={styles.input}>{locker.timesOpen}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailLockerScreen;

const styles = StyleSheet.create({
    content: {
        padding: 10,
        color: Colors.gray,
        paddingTop: 20,
    },
    containerKey: {
        width: '90%',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: Colors.white,
        alignItems: 'center',
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    key: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.blue,
    },
    buttonUntil: {
        width: '90%',
        height: 60,
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    containerForm: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: 20,
        marginHorizontal: 10,
        elevation: 5,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    titleForm: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.dark,
        flex: 4,
    },
    input: {
        fontSize: 20,
        color: Colors.gray,
        textAlign: 'left',
        flex: 6,
        marginLeft: 5,
    },
    containerText: { 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: Colors.dark
    },
    containerButton: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})