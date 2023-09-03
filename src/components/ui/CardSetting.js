import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";

const CardSetting = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.rootContainer}
        >
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={
                                item.id == data.length ? 
                                styles.borderBottomHidden : 
                                styles.borderBottom
                            }
                        >
                            <TouchableOpacity
                                onPress={() => navigation.navigate(item.nameTab)}
                                style={styles.cardContainer}
                            >
                                <View
                                    style={{
                                        flex : 10,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View>
                                        {item.icon}
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                marginLeft: 10,
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex : 1,
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CardSetting;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        backgroundColor: Colors.white,
        borderBlockColor: Colors.red,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    cardContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    borderBottom: {
        borderBottomColor: '#D4D4D4',
        borderBottomWidth: 1,
    },
    borderBottomHidden: {
        borderBottomColor: 'white',
        borderBottomWidth: 0,
    },
});

