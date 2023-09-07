import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../../constants/styles"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HeaderBook = ({ title, isBack = true }) => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            {
                isBack && (
                    <TouchableOpacity
                        style={styles.buttonBack}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
                    </TouchableOpacity>
                )
            }
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </View>
    )
}

export default HeaderBook

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: Colors.primary,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonBack: {
        position: 'absolute',
        left: 20,
        top: 50,
    }
})