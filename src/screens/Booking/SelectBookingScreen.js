import LockerSimulation from "../../components/Book/LockerSimulation";
import Header from "../../components/ui/Header";

const { Text } = require("react-native")
const { View } = require("react-native")

const SelectBookingScreen = ({ 
    route
 }) => {
    const { locker, date } = route.params;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <Header
                title="Select Booking"
                buttons={{
                    isBack: true,
                }}
            />
            <LockerSimulation locker={locker} date={date} />

        </View>
    )
}

export default SelectBookingScreen