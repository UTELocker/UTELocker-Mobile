import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/UTEPay/Profile/ProfileScreen';
import DetailProfileScreen from '../../screens/UTEPay/Profile/DetailProfileScreen';
import ContactScreen from '../../screens/Setting/ContactScreen';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="ProfileWallet" component={ProfileScreen} />
            <Stack.Screen name="DetailProfile" component={DetailProfileScreen} />
            <Stack.Screen name="Support" component={ContactScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;
