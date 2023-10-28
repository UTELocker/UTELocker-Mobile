import React, { useRef, useState, useEffect } from "react";
import {
    TextInput,
    Text,
    View,
    StyleSheet,
    Pressable
} from "react-native";
import { Colors } from "../../../constants/styles";

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
          setIsPinReady(false);
        };
      }, [code]);

    const boxDigit = (_, index) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;
        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        const styleBoxInput =
            isInputBoxFocused && isValueFocused ? styles.SplitBoxesFocused : styles.SplitBoxes;

        return (
            <View
                key={index}
                style={ styleBoxInput }
                onPress={handleOnPress}
            >
                <Text style={styles.SplitBoxText}>{digit}</Text>
            </View>
        );
    };
    
    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };
   
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.SplitOTPBoxesContainer}
                onPress={handleOnPress}
            >
                {boxArray.map(boxDigit)}
            </Pressable>
            <TextInput
                style={styles.inputHidden}
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
                keyboardType="numeric"
            />
        </View>
    );
};

export default OTPInput;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputHidden: {
        position: 'absolute',
        opacity: 0,
    },
    SplitOTPBoxesContainer : {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    SplitBoxes: {
        borderWidth: 4,
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 12,
        minWidth: 40,
        borderColor: Colors.gray,
    },
    SplitBoxText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.dark,
    },
    SplitBoxesFocused: {
        backgroundColor: 'rgba(1, 0, 0, 0.1)',
        borderWidth: 4,
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 12,
        minWidth: 40,
        borderColor: Colors.gray,
    },
});