import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../screens/History/HistoryScreen';
import DetailScreen from '../screens/History/DetailScreen';
import FilterScreen from '../screens/History/FilterScreen';

const Stack = createNativeStackNavigator();

function HistoryStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HistoryApp" component={HistoryScreen} />
            <Stack.Screen name="DetailHistory" component={DetailScreen} />
            <Stack.Screen name="FilterHistory" component={FilterScreen} />
        </Stack.Navigator>
    );
}

export default HistoryStack;
