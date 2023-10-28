import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
} from "react-native";
import { Colors } from "../../../constants/styles";
import OTPInput from "./OTPInput";
import { Pressable } from "react-native";

const SplitCodeInput = ({
    otpCode,
    setOTPCode,
}) => {
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 6;
    

    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <OTPInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
            />
        </Pressable>
    );
}

export default SplitCodeInput;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});
