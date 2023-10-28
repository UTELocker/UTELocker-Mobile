import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { firebaseConfig } from '../../../firebase/configFirebase';
import firebase from 'firebase/compat/app';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplitCodeInput from './SplitCodeInput';
import { Colors } from '../../../constants/styles';
import { setIsLogin } from '../../../redux/authSlice';

const OtpVerification = ({
    isSendOTP,
}) => {
    const account = useSelector((state) => state.auth.user);
    const [otpCode, setOTPCode] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSendOTP && account.phone) {
            
            if (account.phone.length < 10) {
                return;
            }
            const phone = '+84' + account.phone.slice(1);
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider
            .verifyPhoneNumber(phone, recaptchaVerifier.current)
            .then(setVerificationId)
            .catch(console.log);
        }
    }, [isSendOTP]);

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            otpCode
        );

        firebase.auth().signInWithCredential(credential)
            .then((result) => {
                dispatch(setIsLogin(true));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <SplitCodeInput setOTPCode={setOTPCode} otpCode={otpCode}/>
            <TouchableOpacity
                style={styles.buttonConfirm}
                onPress={confirmCode}
            >
                <Text style={styles.titleConfirm}>Confirm OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

export default OtpVerification;

const styles = StyleSheet.create({
    buttonConfirm: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    titleConfirm: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold',
    },
});