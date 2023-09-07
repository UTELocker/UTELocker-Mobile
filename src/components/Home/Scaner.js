import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Scanner = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.shadowView}
            elevation={10}
        >
            <TouchableOpacity
                style={styles.buttonNotification}
                onPress={() => navigation.navigate('Scanner')}
                >
                <MaterialCommunityIcons name="qrcode-scan" size={25} color="black" />
            </TouchableOpacity>
        </View>
    );
}

export default Scanner;

const styles = StyleSheet.create({
    shadowView: {
        width: 40,
        height: 40,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    buttonNotification: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
});