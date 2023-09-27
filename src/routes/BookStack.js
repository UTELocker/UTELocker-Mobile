import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectTypeBookScreen from '../screens/SelectTypeBookScreen';
import ManualBookingLockerScreen from '../screens/ManualBookingLockerScreen';

const Stack = createNativeStackNavigator();

function BookStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            {/* <Stack.Screen name="SelectTypeBook" component={SelectTypeBookScreen} /> */}
            <Stack.Screen name="ManualBooking" component={ManualBookingLockerScreen} />
        </Stack.Navigator>
    );
}

export default BookStack;
