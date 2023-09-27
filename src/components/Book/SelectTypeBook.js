import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Colors } from "../../constants/styles"
import { useNavigation } from "@react-navigation/native"

const SelectTypeBook = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: Colors.primary,
                    }
                ]}
            >
                <Text
                    style={styles.text}
                >
                    Qr Code
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: Colors.grayDark,
                    }
                ]}
                onPress={() => navigation.navigate('ManualBooking')}
            >
                <Text
                    style={styles.text}
                >
                    Manual Book
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectTypeBook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90%',
    },
    button: {
        width: '80%',
        height: '10%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})