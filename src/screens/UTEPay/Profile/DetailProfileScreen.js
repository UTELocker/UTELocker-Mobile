import { View } from "react-native"
import { Colors } from "../../../constants/styles";
import Header from "../../../components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import ContentDetailProfile from "../../../components/Wallet/Profile/ContentDetailProfile";
import { useEffect } from "react";

const DetailProfileScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: "none"
            }
          });
          return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
          });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Profile"
                buttons={{
                    isBack: true,
                    isNotification: false,
                }}
            />
            <ContentDetailProfile />
        </View>
    )
}

export default DetailProfileScreen;

