import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/ui/Header';
import { Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import CardSetting from '../../components/Setting/CardSetting';

const ContactScreen = () => {
    const data = [
        {
            id: '1',
            title: 'Switchboard',
            icon: <Feather name="phone" size={24} color="black" />,
            onPress: () => {
                const phoneNumber = '0123456789';
                Linking.openURL(`tel:${phoneNumber}`)
            },
        },
        {
            id: '2',
            title: 'Email',
            icon: <MaterialCommunityIcons name="email-outline" size={24} color="black" />,
            onPress: () => {
                const email = 'support@example.com';
                Linking.openURL(`mailto:${email}`)
            },
        },
        {
            id: '3',
            title: 'Website',
            icon: <MaterialCommunityIcons name="web" size={24} color="black" />,
            nameTab: 'Logout',
            onPress: async () => {
                const url = 'https://www.google.com';
                Linking.openURL(url);
            }
        },
        {
            id: '4',
            title: 'Comment for us',
            icon: <FontAwesome5 name="comment-alt" size={24} color="black" />,
            nameTab: 'Logout',
            onPress: async () => {
                console.log('Comment for us')
            }
        },
    ];
    return (
        <View style={styles.container}>
            <Header
                title="Contact"
                buttons={{
                    isBack: true,
                    isNotification: false,
                }}
            />
            <CardSetting
                data={data}
            />
        </View>
    );
    }

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
