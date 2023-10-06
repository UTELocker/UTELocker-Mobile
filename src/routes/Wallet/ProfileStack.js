import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/UTEPay/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="ProfileWallet" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;
