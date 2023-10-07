import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/Wallet/Home/Header';
import { Colors } from '../../../constants/styles';
import RecentHistory from '../../../components/Wallet/Home/RecentHistory';
import { Animated } from 'react-native';
import { useRef } from 'react';
import { StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const STYLES = ['light-content', 'dark-content'];

    const [styleStatusBar, setStyleStatusBar] = useState(STYLES[0]);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastOffsetY = useRef(0);


    const paddingForHeaderAni = {
        backgroundColor: animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [Colors.primary, Colors.white],
            extrapolate: 'clamp',
        }),
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                translucent
                backgroundColor="transparent"
                barStyle={styleStatusBar}
            />
            <Animated.View style={[styles.paddingForHeader, paddingForHeaderAni]} />
            <ScrollView
                style={{ flex: 1, backgroundColor: Colors.lightGray2 }}
                onScroll={e => {
                    const scrollY = e.nativeEvent.contentOffset.y;

                    lastOffsetY.current = scrollY;
                    animatedValue.setValue(scrollY);
                    if (scrollY > 60 && styleStatusBar !== STYLES[1]) {
                        setStyleStatusBar(STYLES[1]);
                    }
                    if (scrollY < 60 && styleStatusBar !== STYLES[0]) {
                        setStyleStatusBar(STYLES[0]);
                    }
                }}
            >
                <Header />
                <RecentHistory />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    paddingForHeader: {
        paddingTop: 40,
    },
});
