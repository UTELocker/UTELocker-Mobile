import { View } from "react-native";
import Header from "../../components/ui/Header";
import CardDetailBooking from "../../components/History/CardDetailBooking";
import CardDetailTransfer from "../../components/History/CarDetailTransfer";

const DetailScreen = ({ route }) => {
    const { history, type } = route.params;
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Header 
                title="Detail"
                buttons={{
                    isBack: true,
                    isNotification: false,
                }}
            />
            {
                type === 'booking' ? (
                    <CardDetailBooking
                        history={history}
                    />
                ) : (
                    <CardDetailTransfer
                        history={history}
                    />
                )
            }
        </View>
    )
}

export default DetailScreen;