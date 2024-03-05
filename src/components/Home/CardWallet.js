import { Text, View, StyleSheet, Pressable, TextInput, Alert, Image } from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatNumber } from "../../utils/formatNumber";
import FeatureWallet from "./FeatureWallet";

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
                    borderBottomWidth: 1,
                    borderBottomColor: '#E1E1E1',
                    marginBottom: 10,
                    paddingBottom: 10,
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
                                {formatNumber(balance)}đ
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
                        <Text style={styles.content}>{formatNumber(balance)}đ</Text>
                    </View>
                </View>
            </View>
            <FeatureWallet />
        </View>
    );
};

export default CardWallet;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',  
        height: 140,
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
        fontSize: 18,
        color: 'gray'
    },
    content: {
        fontSize: 18,
        color: 'gray',
    }
});