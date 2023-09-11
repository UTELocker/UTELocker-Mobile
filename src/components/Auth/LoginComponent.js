import React, { useEffect, useState } from "react";

import { Alert, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/styles";
import Input from "./Input";
import Button from "./Button";
import DropdownComponent from "./DropdownComponent";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../api/authAPi";
import LoadingOverlay from "../ui/LoadingOverlay";
import { setLogin } from "../../redux/authSlice";
import STATUS_CODE from "../../constants/statusCode";

const LoginComponent = ({
    email,
    listGroup,
}) => {
    const [ password, setPassword ] = useState('');
    const [ group, setGroup ] = useState('');
    const [isLoadingOverlayVisible, setIsLoadingOverlayVisible] = useState(false);
    const dispatch = useDispatch();
  
    const onAuthenticate = async (credentials) => {
        const { email, password, group } = credentials;
        setIsLoadingOverlayVisible(true);
        const res = await login(email, password, group);
        if (res.status === STATUS_CODE.OK) {
            dispatch(setLogin(res.data.data));
            setIsLoadingOverlayVisible(false);
        } else {
            Alert.alert('Login failed', res.data.message);
            setIsLoadingOverlayVisible(false);
        }
    }

    const onLogin = () => {
        if (group === '') {
            Alert.alert('Please select your group');
            return;
        } else if (password === '') {
            Alert.alert('Please enter your password');
            return;
        }
        onAuthenticate({
            email,
            password,
            group,
        })
    };
  
    if (isLoadingOverlayVisible) {
      return (
        <LoadingOverlay message={'Logging in...'} />
      );
    }

    return (
        <View
            style={{
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: Colors.white,
                width: '100%',
            }}
        >
            <DropdownComponent
                placeholder={'Select your group'}
                setValue={setGroup}
                value={group}
                list={listGroup}
            />
            <Input
                label="Password"
                secure={true}
                placeholder={'Enter your password'}
                onUpdateValue={setPassword}
            />
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Forgot password');
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
                    Forgot password
                </Text>
            </TouchableOpacity>
            <Button
                title="Login"
                onPress={onLogin}
            />
        </View>
    )
};

export default LoginComponent;