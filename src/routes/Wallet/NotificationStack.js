import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '../../screens/UTEPay/Notification/NotificationScreen';

const Stack = createNativeStackNavigator();

function NotificationStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="NotificationWallet" component={NotificationScreen} />
        </Stack.Navigator>
    );
}

export default NotificationStack;
