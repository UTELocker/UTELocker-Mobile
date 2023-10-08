import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/ui/Header';
import { Colors } from '../../../constants/styles';
import ContentHistories from '../../../components/Wallet/History/ContentHistories';

const HistoryScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Histories Transaction"
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
            <ContentHistories />
        </View>
    )
}

export default HistoryScreen;