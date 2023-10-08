import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Colors } from "../../../constants/styles";
import ModalNoti from "../../../components/ui/ModalNoti";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { SelectList } from "react-native-dropdown-select-list";

const TopUpScreen = () => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [ tradingCode, setTradingCode ] = useState('');
    const navigation = useNavigation();

    const [selected, setSelected] = useState("");
    
    const data = [
      {key:'bank', value:'Bank'},
      {key:'zalo', value:'Zalo'},
      {key:'momo', value:'Momo'},
    ]

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: "none"
            }
          });
          return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
          });
    }, []);
        
    const handleWithDraw = async () => {
        setLoading(true);
        setError(false);
        setSuccess(false);
        setMessage("");
    
        // const response = await withDraw(user, amount);
        // if (response.error) {
        // setError(true);
        // setMessage(response.error);
        // } else {
        setSuccess(true);
        setMessage('response.message');
        // }
        setLoading(false);
    };

    const renderDetailMethodTransfer = (type) => {
        switch (type) {
            case 'bank':
                return (
                    <View
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <Text style={styles.text_footer}>Bank BIDV</Text>
                        <Text style={styles.text_footer}>Bank Code: *******89</Text>
                        <Text style={styles.text_footer}>Bank Name: Nguyen Van A</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color={Colors.primary} size={20} />
                            <TextInput
                                placeholder="Enter Trade Code"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                style={[styles.textInput, { color: Colors.primary }]}
                                autoCapitalize="none"
                                onChangeText={(val) => setTradingCode(val)}
                            />
                        </View>
                    </View>
                )
            case 'zalo':
                return (
                    <View
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <Text style={styles.text_footer}>Zalo</Text>
                        <Text style={styles.text_footer}>Phone: *******63</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color={Colors.primary} size={20} />
                            <TextInput
                                placeholder="Enter Trade Code"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                style={[styles.textInput, { color: Colors.primary }]}
                                autoCapitalize="none"
                                onChangeText={(val) => setTradingCode(val)}
                            />
                        </View>
                    </View>
                )
            case 'momo':
                return (
                    <View>
                        <Text style={styles.text_footer}>Momo</Text>
                        <Text style={styles.text_footer}>Phone: *******89</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color={Colors.primary} size={20} />
                            <TextInput
                                placeholder="Enter Trade Code"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                style={[styles.textInput, { color: Colors.primary }]}
                                autoCapitalize="none"
                                onChangeText={(val) => setTradingCode(val)}
                            />
                        </View>
                    </View>
                )
            default:
                return (
                    <View>
                        <Text style={styles.text_footer}>Bank BIDV</Text>
                        <Text style={styles.text_footer}>Bank Code: *******89</Text>
                        <Text style={styles.text_footer}>Bank Name: Nguyen Van A</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color={Colors.primary} size={20} />
                            <TextInput
                                placeholder="Enter Trade Code"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                style={[styles.textInput, { color: Colors.primary }]}
                                autoCapitalize="none"
                                onChangeText={(val) => setTradingCode(val)}
                            />
                        </View>
                    </View>
                )
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" size={20} color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.text_header}>Top up</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Amount</Text>
                <View style={styles.action}>
                    <FontAwesome name="dollar" color={Colors.primary} size={20} />
                    <TextInput
                        placeholder="Enter Amount"
                        placeholderTextColor="#666666"
                        keyboardType="numeric"
                        style={[styles.textInput, { color: Colors.primary }]}
                        autoCapitalize="none"
                        onChangeText={(val) => setAmount(val)}
                    />
                </View>
                <SelectList 
                    setSelected={setSelected} 
                    data={data}
                    placeholder="Choose method transfer"
                    inputStyles={{
                        fontSize: 16,
                    }}
                    boxStyles={{
                        marginTop: 10,
                    }}
                />
                {
                    selected ? renderDetailMethodTransfer(selected) : null
                }
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => handleWithDraw()}
                    >
                        <View style={{ flexDirection: "row" }}>
                            {loading && <ActivityIndicator color={Colors.white} />}
                            <Text
                                style={[
                                styles.textSign,
                                {
                                    color: Colors.white,
                                },
                                ]}
                            >
                                {loading ? "Loading..." : "Top Up"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalNoti
                show={error || success}
                title={error ? "Error" : "Success"}
                message={message}
                titleButton="OK"
                onClose={() => {
                    setError(false);
                    setSuccess(false);
                }}
            />
        </View>
    );
}

export default TopUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    header: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    footer: {
        flex: 3,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
    },
    text_footer: {
        color: Colors.gray,
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: Colors.lightGray2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
        alignItems: "center",
        fontSize: 16,
        paddingTop: 9,
    },
    button: {
        alignItems: "center",
        marginTop: 20,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.primary,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    errorMsg: {
        color: Colors.danger,
        fontSize: 14,
    },
    successMsg: {
        color: Colors.success,
        fontSize: 14,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Colors.dark,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: Colors.primary,
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
    },
});