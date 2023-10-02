import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import * as SecureStore from 'expo-secure-store';
import Notification from "../ui/Notification";
import CardWallet from "./CardWallet";
import Scanner from "./Scaner";

const HeaderHome = () => {
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
                    <View
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <Scanner />
                    </View>
                    <Notification />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={styles.titleScreen}
                    >
                        Welcome to locker
                    </Text>
                    <Text
                        style={styles.title}
                    >
                        {nameSiteGroup}
                    </Text>
                </View>
                <CardWallet wallet={
                    {
                        balance: 100000,
                        balanceDeals: 100000,
                    }
                }/>
            </ImageBackground>
        </View>
    );
};

export default HeaderHome;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        height: 280,
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    titleScreen: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    }
});