import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../../screens/UTEPay/History/HistoryScreen';

const Stack = createNativeStackNavigator();

function HistoryStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HistoryWallet" component={HistoryScreen} />
        </Stack.Navigator>
    );
}

export default HistoryStack;
