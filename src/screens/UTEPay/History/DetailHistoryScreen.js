import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native"
import { Colors } from "../../../constants/styles";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import Card from "../../../components/Wallet/History/Detail/Card";
import DetailPayment from "../../../components/Wallet/History/Detail/DetailPayment";
import DetailTransaction from "../../../components/Wallet/History/Detail/DetailTransaction";
import ContactUs from "../../../components/Wallet/History/Detail/ContactUs";

const DetailHistoryScreen = ({ 
    route
 }) => {
    const { item } = route.params;
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
            <View 
                style={{
                    height: 200,
                }}
            >
                <View
                    style={{
                        backgroundColor: Colors.primary,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        paddingTop: 50,
                        paddingHorizontal: 10,
                        height: 150,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <AntDesign name="left" size={20} color={Colors.white} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: '400',
                                marginLeft: 10,
                            }}
                        >
                            Detail History
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: -40,
                        width: '100%',
                        height: 150,
                        alignItems: 'center',
                    }}
                >
                    <Card>
                        <DetailPayment item={item} />
                    </Card>
                </View>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 40,
                }}
            >
                <Card>
                    <DetailTransaction item={item} />
                </Card>
            </View>
            <ContactUs />
        </View>
    )
}

export default DetailHistoryScreen;

