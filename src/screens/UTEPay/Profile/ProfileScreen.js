import React from 'react';
import { View, Text } from 'react-native';
import HeaderProfile from '../../../components/Wallet/Profile/HeaderProfile';
import ContentProfile from '../../../components/Wallet/Profile/ContentProfile';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderProfile />
            <ContentProfile />
        </View>
    )
}

export default ProfileScreen;