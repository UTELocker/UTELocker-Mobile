import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectTypeBookScreen from '../screens/SelectTypeBookScreen';
import ManualBookingLockerScreen from '../screens/ManualBookingLockerScreen';
import FormBookingScreen from '../screens/Booking/FormBookingScreen';
import SelectBookingScreen from '../screens/Booking/SelectBookingScreen';
import SuccessBookingScreen from '../screens/Booking/SuccessBookingScreen';

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
            <Stack.Screen name="FormBooking" component={FormBookingScreen} />
            <Stack.Screen name="SelectBooking" component={SelectBookingScreen} />
            <Stack.Screen name="SuccessBooking" component={SuccessBookingScreen} />
        </Stack.Navigator>
    );
}

export default BookStack;
