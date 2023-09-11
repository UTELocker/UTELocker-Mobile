import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailLockerScreen from '../screens/DetailLockerScreen';
import ScannerScreen from '../screens/ScannerScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HomeApp" component={HomeScreen} />
            <Stack.Screen name="DetailLocker" component={DetailLockerScreen} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;
