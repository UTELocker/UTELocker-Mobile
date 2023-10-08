import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Colors } from "../../../constants/styles";
import ModalNoti from "../../../components/ui/ModalNoti";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { SelectList } from "react-native-dropdown-select-list";
import { Modal } from "react-native";

const TransferScreen = () => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [ tradingCode, setTradingCode ] = useState('');
    const [ isShowConfirm, setIsShowConfirm ] = useState(false);

    const navigation = useNavigation();
    
    const [selected, setSelected] = useState("");
    
    const data = [
      {key:'lviet456@gmail.com', value:'lviet456@gmail.com'},
      {key:'ogata@gmail.com', value:'ogata@gmail.com'},
      {key:'higan@gmail.com', value:'higan@gmail.com'},
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
        
    const handleTransfer = async () => {
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
            case 'lviet456@gmail.com':
                return (
                    <View
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <Text style={styles.text_footer}>Infomation</Text>
                        <Text style={styles.text_footer}>Name: Nguyen Van A</Text>
                        <Text style={styles.text_footer}>Email: lviet456@gmail.com</Text>
                    </View>
                )
            case 'ogata@gmail.com':
                return (
                    <View
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <Text style={styles.text_footer}>Infomation</Text>
                        <Text style={styles.text_footer}>Name: Nguyen Van B</Text>
                        <Text style={styles.text_footer}>Email: ogata@gmail.com</Text>
                    </View>
                )
            case 'higan@gmail.com':
                return (
                    <View>
                        <Text style={styles.text_footer}>Infomation</Text>
                        <Text style={styles.text_footer}>Name: Nguyen Van C</Text>
                        <Text style={styles.text_footer}>Email: higan@gmail.com</Text>
                    </View>
                )
            default:
                return (
                    <View>
                        <Text style={styles.text_footer}>Infomation</Text>
                        <Text style={styles.text_footer}>Name: Nguyen Van A</Text>
                        <Text style={styles.text_footer}>Email: lviet456@gmail.com</Text>
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
                <Text style={styles.text_header}>Transfer</Text>
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
                    placeholder="Search user by mail"
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
                        onPress={() => setIsShowConfirm(true)}
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
                                {loading ? "Loading..." : "Transfer"}
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowConfirm}
                onRequestClose={() => {
                    setIsShowConfirm(!isShowConfirm);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[
                            styles.text_footer,
                            {
                                fontSize: 20,
                                fontWeight: "500",
                                color: Colors.dark,
                            }
                        ]}>Confirm your transfer</Text>
                        <Text style={styles.text_footer}>Amount: {amount}</Text>
                        {
                            renderDetailMethodTransfer(selected)
                        }
                        
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, {flex:1}]}
                                onPress={() => setIsShowConfirm(!isShowConfirm)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, {flex:1, marginLeft: 10}]}
                                onPress={() => setIsShowConfirm(!isShowConfirm)}
                            >
                                <Text style={styles.textStyle}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default TransferScreen;

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
        borderRadius: 10,
        paddingVertical: 10,
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