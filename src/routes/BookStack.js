import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import SelectTypeBookScreen from '../screens/SelectTypeBookScreen';
import BookLockerScreen from '../screens/BookLockerScreen';

const Stack = createNativeStackNavigator();

function BookStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="SelectTypeBook" component={SelectTypeBookScreen} />
            <Stack.Screen name="BookLocker" component={BookLockerScreen} />
        </Stack.Navigator>
    );
}

export default BookStack;
