import {Text, View, StyleSheet} from 'react-native';
import { Colors } from '../constants/styles';
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>UTE Locker</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
