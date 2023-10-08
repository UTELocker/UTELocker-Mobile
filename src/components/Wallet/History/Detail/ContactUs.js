import { Linking } from "react-native";
import { Alert } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../../../../constants/styles";

const ContactUs = () => {
    return (
        <View
            style={{
                marginTop: 10,
                alignItems: 'center',
            }}
        >
            <Text>
                Contact us
            </Text>
            <Text
                style={{
                    color: Colors.primary,
                }}
                onPress={() => {
                    Alert.alert(
                        "Contact Support",
                        "Do you want to call to support?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => {
                                const phone = '0909090909';
                                Linking.openURL(`tel:${phone}`)

                            } }
                        ]
                    )
                }}
            >
                0909090909
            </Text>
        </View>
    )
}

export default ContactUs;