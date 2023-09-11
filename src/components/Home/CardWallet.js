import { Text, View, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CardWallet = ({ wallet }) => {
    const { balance, balanceDeals } = wallet;
    const [balanceVisibility, setBalanceVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState('eye');
  
    const handleBalanceVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setBalanceVisibility(!balanceVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setBalanceVisibility(!balanceVisibility);
      }
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderRightWidth: 1,
                        borderRightColor: '#E1E1E1',
                    }}
                >
                    <Text style={[styles.title, {color: Colors.primary}]}>Balance</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Pressable
                            onPress={handleBalanceVisibility}
                            style={{
                                marginRight: 5,
                            }}
                        >
                            <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                        </Pressable>
                        <TextInput 
                            style={styles.content}
                            secureTextEntry={balanceVisibility}
                            editable={false}
                        >
                                {balance}đ
                        </TextInput>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        marginLeft: 10,
                    }}
                >
                    <Text style={styles.title}>Promotion</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={styles.content}>{balanceDeals}đ</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    borderTopWidth: 1,
                    borderTopColor: '#E1E1E1',
                    marginTop: 10,
                    paddingTop: 10,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}  
                >
                    <MaterialIcons name="attach-money" size={30} color={Colors.blue} />
                    <Text style={{
                        fontSize: 16,
                        color: 'gray',
                    }}>
                        Top Up
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}  
                >
                    <FontAwesome5 name="money-bill-wave" size={30} color={Colors.blue} />
                    <Text style={{
                        fontSize: 16,
                        color: 'gray',
                    }}>
                        WithDraw
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CardWallet;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',  
        height: 180,
        elevation: 5,
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        color: 'gray'
    },
    content: {
        fontSize: 20,
        color: 'gray',
    }
});