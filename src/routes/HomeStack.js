import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailLockerScreen from '../screens/DetailLockerScreen';

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
        </Stack.Navigator>
    );
}

export default HomeStack;
