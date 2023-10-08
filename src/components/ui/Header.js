import React from 'react'
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/styles';    
import { useNavigation } from '@react-navigation/native';
import Notification from '../ui/Notification'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ 
    title,
    buttons,
    styleHeader = {},
    styleTitle = {},
}) => {
    const navigation = useNavigation();
    return (
        <View
            style={[
                styles.header,
                styleHeader
            ]}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                }}
            >
                {
                    buttons.isBack ? (
                        <Pressable
                            onPress={() => {
                                if (buttons.onPressBack) {
                                    buttons.onPressBack();
                                } else {
                                    navigation.goBack();
                                }
                            }}
                            style={{
                                paddingTop: 6,
                                marginRight: 10,
                            }}
                        >
                            <AntDesign name="left" size={20} color={Colors.white} />
                        </Pressable>
                    ) : null
                }
                <Text
                    style={[
                        styles.title,
                        styleTitle
                    ]}
                >
                    {title}
                </Text>
            </View>
            {
                buttons.isNotification && (
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                        }}
                    >
                        <Notification />
                    </View>
                )
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : {
        paddingTop: 20,
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.white,
    },
    buttonNotification: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
