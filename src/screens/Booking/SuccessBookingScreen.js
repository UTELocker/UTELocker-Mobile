import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Header from '../../components/ui/Header';
import CardBookSuccess from '../../components/Book/CardBookSuccess';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/styles';
import { useCallback } from 'react';

const SuccessBookingScreen = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation();
    
    useFocusEffect(
        useCallback(() => {
          return () => {
            navigation.reset({
                index: 0,
                routes: [
                    { name: 'ManualBooking' }
                ],
            });
          };
        }, [])
    );
 
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <Header
                title="Success Booking"
                buttons={{
                    isBack: false,
                }}
            />
            <View
                style={{
                    padding: 10,
                    backgroundColor: '#EBEBEB',
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 10,
                    }}
                >
                    List Booking
                </Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <CardBookSuccess
                                book={item}
                            />
                        )
                    }}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                        marginBottom: 20,
                    }}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#fff',
                        }}
                    >
                        Back to Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessBookingScreen