import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { Colors } from '../constants/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticatedTab from './AuthenticatedTab';
const Stack = createNativeStackNavigator();

function AuthTab() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.primary100 },
        }}
        >
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

export default AuthTab;
