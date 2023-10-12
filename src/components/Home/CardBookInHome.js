import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated } from "react-native";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const CardBookInHome = ({ book }) => {
    const navigation = useNavigation();
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const [isShow, setIsShow] = React.useState(false);
    const animatedCardStyle = {
        height: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [180, 280],
        }),
    };
    return (
        <Animated.View
            style={[
                styles.cardContainer,
                animatedCardStyle,
            ]}
            onPress={() => navigation.navigate("DetailLocker", {
                data: book,
            })}
        >
            <View style={styles.content}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.code}>{book.code}</Text>
                    <MaterialCommunityIcons name="locker-multiple" size={50} color="black" />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', paddingLeft: 10}}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={styles.containerCode}
                        >
                            <Text style={styles.containerPassword}>
                                Key: <Text style={styles.password}>{book.key}</Text>
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}
                        >
                        </View>
                    </View>
                    <Text>
                        { book.timeOut } remaining
                    </Text>
                    <Text>
                        { book.address }
                    </Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems:'center'}}>
                    <View
                        style={{
                            height: 80,
                            width: 80,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 40,
                            backgroundColor: Colors.primary
                        }}
                    >
                        <MaterialIcons 
                            name="lock-outline" 
                            size={60} 
                            color="white" 
                        />
                    </View>
                    <View>
                        <Text>
                            Click to open
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.footer}
                onPress={() => {
                    Animated.timing(animatedValue, {
                        toValue: isShow ? 0 : 1,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                    setIsShow(!isShow);
                }}
            >
                    <MaterialIcons 
                        name={
                            isShow ? 'keyboard-arrow-down':
                            'keyboard-arrow-right'
                        }
                        size={24}
                        color="black"
                        />                
                    <Text
                        style={{
                            marginLeft: 10,
                        }}
                    >
                    Locker settings
                </Text>
            </TouchableOpacity>
            {
                isShow && (
                    <View
                        style={{
                            paddingHorizontal: 10,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                backgroundColor: Colors.primary,
                            }}
                            onPress={() => navigation.navigate("DetailLocker", {
                                data: book,
                            })}
                        >
                            <Text
                            style={{
                                color: Colors.white,
                                fontWeight: 'bold',
                            }}
                            >
                                Detail
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                marginTop: 10,
                                backgroundColor: Colors.gray,
                            }}
                            onPress={() => navigation.navigate("DetailLocker", {
                                data: book,
                            })}
                        >
                            <Text
                            style={{
                                color: Colors.white,
                                fontWeight: 'bold',
                            }}
                            >
                                End booking
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 180,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    password: {
        fontSize: 30,
        color: Colors.blue,
    },
    containerPassword: {
        fontSize: 20,
        fontWeight: "500",
    },
    code: {
        fontSize: 24,
        fontWeight: "bold",
        
    },
    iconRandom: {
        fontWeight: "bold",
        paddingRight: 20,
    },
    timeOutGreen: {
        fontWeight: "bold",
        color: Colors.green,
    },
    timeOutRed: {
        fontWeight: "bold",
        color: Colors.red,
    },
    containerCode: {
        flex: 4,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    footer: {
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderTopColor: Colors.lightGray2,
        borderTopWidth: 1,
    },
    content: {
        height: 140,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
});

export default CardBookInHome;