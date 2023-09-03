import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CardQuickInformation from "./CardQuickInformation";
import * as SecureStore from 'expo-secure-store';
import Notification from "../ui/Notification";

const HeaderHome = ({data}) => {
    const [ nameSiteGroup, setNameSiteGroup ] = useState('');
    useEffect(() => {
        const getNameSiteGroup = async () => {
            const nameSiteGroup = await SecureStore.getItemAsync('nameSiteGroup');
            setNameSiteGroup(nameSiteGroup);
        }
        getNameSiteGroup();
    }, []);

    return (
        <View
            style={styles.rootContainer}
        >
            <ImageBackground
                source={require('../../../assets/images/header-home.jpg')}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <View
                    style={styles.header}>
                    <Notification />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 5,
                        }}
                    >
                        Welcome to locker
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginTop: 5,
                        }}
                    >
                        {nameSiteGroup}
                    </Text>
                </View>
                <View
                    style={styles.cardInformation}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: 20,
                        }}
                    >
                        Quick information
                    </Text>
                    <FlatList
                        data={data}
                        contentContainerStyle={{
                            marginTop: 10,
                        }}
                        renderItem={({ item, index }) => 
                            <CardQuickInformation
                                item={item}
                                index={index}
                            />
                        }
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default HeaderHome;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        height: 220,
        marginBottom: 70,
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',

    },
    header: {
        marginTop: 15 * 2,
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 10 * 2,
    },
    cardInformation: {
        position: 'absolute',
        bottom: "-30%",
    }
});