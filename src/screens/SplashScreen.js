import {Text, View, StyleSheet, Animated} from 'react-native';
import { Colors } from '../constants/styles';
import { useEffect, useRef } from 'react';
const SplashScreen = () => {

    const flickerAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(flickerAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(flickerAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [flickerAnimation]);

    const opacity = flickerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    opacity: opacity,
                }}
            >
                <Text style={styles.text}>UTE Locker</Text>
            </Animated.View>
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
