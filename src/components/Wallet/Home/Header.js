import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "../../../constants/styles";
import CardFeature from "./CardFeature";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [isShowMore, setIsShowMore] = useState(false);
    const heightRef = useRef(new Animated.Value(150)).current;

    useEffect(() => {
        if(isShowMore) {
            Animated.timing(heightRef, {
                toValue: 200,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(heightRef, {
                toValue: 130,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    }, [isShowMore])

    return (
        <Animated.View style={[
            styles.container,
            {
                height: heightRef,
            }
        ]}>
            <Text style={styles.title}>Balance</Text>
            <View
                style={{ flexDirection: 'row', alignItems: 'center'}}
            >
                <Text style={styles.balance}>$10.0</Text>
                <TouchableOpacity
                    onPress={() => {
                        setIsShowMore(!isShowMore);
                    }}
                >
                    {
                        isShowMore ? (
                            <MaterialIcons name="keyboard-arrow-up" size={30} color={Colors.white}/>
                        ) : (
                            <MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.white}/>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View
                style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    justifyContent: 'space-around',
                }}
            >
                <View>
                    <Text style={styles.title}>Balance</Text>
                    <Text style={styles.balance}>$10.0</Text>
                </View>
                <View>
                    <Text style={styles.title}>Promotion</Text>
                    <Text style={styles.balance}>$10.0</Text>
                </View>
            </View>
            <View
                style={styles.containerCardFeature}
            >
                <CardFeature />
            </View>

        </Animated.View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingTop: 10,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        zIndex: 1000,
    },
    title: {
        fontSize: 18,
        color: Colors.white
    },
    balance: {
        fontSize: 24,
        color: Colors.white,
        fontWeight: 'bold',
    },
    containerCardFeature: {
        position: 'absolute',
        bottom: -40,
        left: 20,
        right: 20,
        alignItems: 'center',
    }
});