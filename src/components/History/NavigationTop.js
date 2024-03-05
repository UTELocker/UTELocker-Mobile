import * as React from 'react';
import BookingScreen from '../../screens/History/BookingScreen';
import SearchHistory from './SearchHistory';
import { useState } from 'react';
import { View } from 'react-native';
import Header from '../ui/Header';
import { FILTER_LOCATION, FILTER_MOTH, FILTER_STATUS } from '../../constants/systemConstant';

export default NavigationTop = () => {
    const [balanceVisibility, setBalanceVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState('eye');
    const [ contentSearch, setContentSearch ] = useState('');
    const [ filters, setFilters ] = useState({
        moth: FILTER_MOTH[0].value ,
        location: FILTER_LOCATION[0].value,
        status: FILTER_STATUS[0].value,
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
            <BookingScreen 
                contentSearch={contentSearch}
                setListLocation={setListLocation}
                filters={filters}
            />
        </View>
    );
}
