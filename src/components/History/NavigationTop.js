import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../constants/styles';
import BookingScreen from '../../screens/History/BookingScreen';
import TransferScreen from '../../screens/History/TransferScreen';
import SearchHistory from './SearchHistory';
import { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useEffect } from 'react';
import Header from '../ui/Header';
import { FILTER_LOCATION, FILTER_METHOD, FILTER_MOTH, FILTER_STATUS, FILTER_TYPE_TRANSFER } from '../../constants/fieldFilter';

const Tab = createMaterialTopTabNavigator();

export default NavigationTop = () => {
    const [balanceVisibility, setBalanceVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState('eye');
    const [ contentSearch, setContentSearch ] = useState('');
    const [ filters, setFilters ] = useState({
        moth: FILTER_MOTH[0].value ,
        location: FILTER_LOCATION[0].value,
        typeTransfers: FILTER_TYPE_TRANSFER[0].value,
        status: FILTER_STATUS[0].value,
        method: FILTER_METHOD[0].value,
    });
    const [ listLocation, setListLocation ] = useState([]);

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Header
                title="History"
                buttons={{
                    isBack: false,
                    isNotification: true,
                }}
            />
            <SearchHistory
                setBalanceVisibility={setBalanceVisibility}
                rightIcon={rightIcon}
                setRightIcon={setRightIcon}
                balanceVisibility={balanceVisibility}
                setContentSearch={setContentSearch}
                contentSearch={contentSearch}
                setFilters={setFilters}
                filters={filters}
                listLocation={listLocation}
            />
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: Colors.white,
                    labelStyle: {
                        textTransform: "uppercase",
                    },
                    inactiveTintColor: Colors.dark,
                    indicatorStyle: {
                        height: null,
                        top: '10%',
                        bottom: '10%',
                        width: '45%',
                        left: '2.5%',
                        borderRadius: 100,
                        backgroundColor: Colors.primary,
                    },
                    style: {
                        alignSelf: "center",
                        width: '80%',
                        borderRadius: 100,
                        borderColor: "blue",
                        backgroundColor: "white",
                        marginBottom: 20,
                    },
                    tabStyle: {
                        borderRadius: 100,
                    },
                }}
                screenListeners={{
                    blur: () => {
                        setContentSearch('');
                        Keyboard.dismiss();
                    }
                }}
            >
            <Tab.Screen
                name="Feed"
                options={{ tabBarLabel: 'Booking' }}
            >
                {props => <BookingScreen 
                    {...props} 
                    contentSearch={contentSearch}
                    setListLocation={setListLocation}
                    filters={filters}
                />}
            </Tab.Screen>
            <Tab.Screen
                name="Notifications"
                options={{ tabBarLabel: 'Transfer' }}
            >
                {props => <TransferScreen 
                    {...props} 
                    balanceVisibility={balanceVisibility}
                    contentSearch={contentSearch}
                    filters={filters}
                />}
            </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}