import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/UTEPay/Home/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HomeWallet" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;
