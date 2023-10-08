import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../../constants/styles";
import { useDispatch } from "react-redux";

const ModalNoti = ({
    title = 'Error',
    titleButton = 'Close',
    message = 'Error',
    show = false,
    onClose = () => {},
}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        onClose();
    }
    return (
        <Modal visible={show} animationType="none" transparent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalText}>{message}</Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => handleClick()}
                    >
                        <Text style={styles.textStyle}>{titleButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalNoti

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: '80%',
        alignItems: "center",
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonStyle: {
        borderRadius: 20,
        width: '80%',
        padding: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center"
    }
});

