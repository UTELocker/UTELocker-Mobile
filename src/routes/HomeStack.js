import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailLockerScreen from '../screens/Home/DetailLockerScreen';
import ScannerScreen from '../screens/ScannerScreen';
import HomeScreen from '../screens/Home/HomeScreen';

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
