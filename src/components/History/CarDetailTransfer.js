import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../../constants/styles";
import STATUS_LOCKER from "../../constants/statusBooking";
import { Entypo } from '@expo/vector-icons';

const CardDetailTransfer = ({ history }) => {

    const stylesStatus = (status) => {
        switch (status) {
            case STATUS_LOCKER.FINISHED:
                return {
                    backgroundColor: 'green',
                }
            case STATUS_LOCKER.CANCEL:
                return {
                    backgroundColor: 'orange',
                }
            case STATUS_LOCKER.PENDING:
                return {
                    backgroundColor: 'yellow',
                }
            default:
                return {
                    backgroundColor: 'red',
                }
        }
    }

    const handleStatus = (status) => {
        switch (status) {
            case STATUS_LOCKER.FINISHED:
                return 'Finished';
            case STATUS_LOCKER.CANCEL:
                return 'Cancel';
            case STATUS_LOCKER.PENDING:
                return 'Pending';
            default:
                return 'Error';
        }
    }

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.card}
            >
                <View
                    style={styles.cardHeader}
                >
                    <View
                        style={{
                            height: '60%',
                            width: '18%',
                            borderWidth: 1,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                        }}
                    >
                        <Entypo 
                            name="wallet" 
                            size={35} 
                            color="black" 
                        />
                    </View>
                    <Text
                        style={styles.cardTitle}
                    >
                        {history.type}
                    </Text>
                </View>
                <View
                    style={styles.cardBody}
                >
                    <View
                        style={[
                            styles.containerText,
                            { marginBottom: 10}
                        ]}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Status:
                        </Text>
                        <Text
                            style={[
                                styles.textStatus,
                                stylesStatus(history.status)
                            ]}
                        >
                            {handleStatus(history.status)}
                        </Text>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Time:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.time}
                        </Text>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Method:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.method}
                        </Text>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Balance:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.balance}đ
                        </Text>
                    </View>
                    
                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Amount:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {
                                history.type == 'deposit' ? '+' : '-'
                            }{history.amount}đ
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.cardFooter}
                onPress={() => {
                    Alert.alert(
                        "Contact Support",
                        "Do you want to call to support?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => {
                                const phone = '0382349463';
                                Linking.openURL(`tel:${phone}`)

                            } }
                        ]
                    )
                }}
            >
                <Text
                    style={styles.titleFooter}
                >
                    Contact Support
                </Text>
            </TouchableOpacity>
        </View>        
    )
}

export default CardDetailTransfer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    card: {
        width: '90%',
        height: '45%',
        backgroundColor: Colors.white,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary500,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardField: {
        fontSize: 16,
        color: Colors.gray,
    },
    textStatus: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardFooter: {
        width: '90%',
        height: '5%',
        backgroundColor: Colors.lightBlue,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleFooter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
})