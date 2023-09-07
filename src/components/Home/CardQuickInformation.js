import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const CardQuickInformation = ({item}) => {
    const navigation = useNavigation();
    return (
        <View
            style={[styles.rootContainer, { marginLeft: 10}]}
        >
            <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                <Text
                    style={{
                        fontSize: 16,
                    }}
                >
                    <Text>Total: </Text>
                    <Text 
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: item.color ?? Colors.gray 
                        }}
                    >
                        {item.num}{item.max ? `/${item.max}` : ''}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        width: 180,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    image: {
        width: 25,
        marginTop: 5,
        height: 25,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: Colors.gray,
    },
});

export default CardQuickInformation;
