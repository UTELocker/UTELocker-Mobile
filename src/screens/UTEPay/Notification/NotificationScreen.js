import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/ui/Header';
import { Colors } from '../../../constants/styles';
import ContentNotification from '../../../components/Wallet/Notification/ContentNotification';

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Notification"
                buttons={{
                    isBack: true,
                    onPressBack: () => {
                        navigation.goBack();
                    }
                }}
                styleHeader={{
                    backgroundColor: Colors.white,
                    paddingHorizontal: 10

                }}
                styleTitle={{
                    fontWeight: '400',
                    color: Colors.black,
                }}
            />
            <ContentNotification />
        </View>
    )
}

export default NotificationScreen;