import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Animated, Alert, TouchableOpacity } from "react-native";
import { Colors } from "../constants/styles";
import PrepareLoginComponent from "../components/Auth/PrepareLoginComponent";
import LoginComponent from "../components/Auth/LoginComponent";
import { ListGroup, userDetail } from "../api/authAPi";
import STATUS_CODE from "../constants/statusCode";

const LoginScreen = () => {
    const [ email, setEmail ] = useState('');
    const [ listGroup, setListGroup ] = useState([]);
    const [ step, setStep ] = useState(0);

    const onLogin = () => {
        if (email === '') {
            Alert.alert('Please enter your email');
            return;
        } else if (!email.includes('@')) {
            Alert.alert('Please enter a valid email');
            return;
        }
        const fetchGroup = async () => {
            const res = await ListGroup(email);
            if (res.status === STATUS_CODE.OK) {
                const data = res.data.data;
                setListGroup([]);
                data.map((item) => {
                    setListGroup((prev) => [...prev, {
                        label: item.name,
                        value: item.id,
                    }]);
                });
                setStep(1);
            } else {
                Alert.alert('Error', res.data.message);
            }
        };
        fetchGroup();
    };

    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                source={require('../../assets/locker_login.png')}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <View style={{ height: '45%' }} />
                <View
                    style={{
                        width: '100%',
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        alignItems: 'center',
                    }}
                >
                    {
                        step === 1 ?
                        <TouchableOpacity
                        onPress={() => {
                            setStep(0);
                        }}
                        style={{
                            position: 'absolute',
                            top: 30,
                            left: 30,

                        }}
                    >
                        <Text>
                            Return
                        </Text>
                    </TouchableOpacity> : null
                    }
                    <Text
                        style={{
                            fontSize: 20,
                            color: Colors.dark,
                            marginTop: 20,
                        }}
                    >
                        Welcome to
                    </Text>
                    <Text
                        style={{
                            fontSize: 35,
                            color: Colors.dark,
                            fontWeight: '900',
                            marginTop: 5,
                        }}
                    >
                        UTE LOCKER
                    </Text>
                    {
                        step === 0 ?
                        <View
                            style={{
                                alignItems: 'center',
                                marginTop: 20,
                                backgroundColor: Colors.white,
                                width: '100%',
                            }}
                        >
                            <PrepareLoginComponent
                                onPress={onLogin}
                                setEmail={setEmail}
                            />
                        </View> :
                        <LoginComponent
                            email={email}
                            listGroup={listGroup}
                        />
                    }

                </View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '50%',
    },

});