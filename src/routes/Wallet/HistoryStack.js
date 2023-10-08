import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../../screens/UTEPay/History/HistoryScreen';
import DetailHistoryScreen from '../../screens/UTEPay/History/DetailHistoryScreen';

const Stack = createNativeStackNavigator();

function HistoryStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HistoryWallet" component={HistoryScreen} />
            <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
        </Stack.Navigator>
    );
}

export default HistoryStack;
