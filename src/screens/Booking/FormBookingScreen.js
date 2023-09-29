import FormBooking from "../../components/Book/FormBooking";
import Header from "../../components/ui/Header";

const { Text } = require("react-native")
const { View } = require("react-native")

const FormBookingScreen = ({ 
    route
 }) => {
    const { locker, listCabinetBooked, date } = route.params;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <Header
                title="Form Booking"
                buttons={{
                    isBack: true,
                }}
            />
            <FormBooking
                locker={locker}
                listCabinetBooked={listCabinetBooked}
                date={date}
            />
        </View>
    )
}

export default FormBookingScreen