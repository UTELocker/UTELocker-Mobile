import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { Colors } from "../../constants/styles";
import * as SecureStore from 'expo-secure-store';

async function saveStatusCode(key, value) {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
}

const ModalPlolicy = ({
    code,
    title,
    visible,
    setVisible,
    content,
    onClose,
    onConfirm,
}) => {

    const [isCheckedHidden, setCheckedHidden] = useState(false);
    const [isCheckedConfirm, setCheckedConfirm] = useState(false);
    return (
        <View
            style={styles.container}
        >
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    setVisible(false);
                }}
                transparent={true}            
            >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <View style={styles.content}>
                        <Text style={styles.modalContent}>{content}</Text>
                        <View style={styles.section}>
                            <Checkbox
                            style={styles.checkbox}
                            value={isCheckedConfirm}
                            onValueChange={setCheckedConfirm}
                            color={isCheckedConfirm ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Confirm</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.button, 
                                    {
                                        marginRight: 10,
                                        backgroundColor: Colors.gray,
                                    }
                                ]}
                                onPress={() => {
                                    onClose();
                                    setVisible(false);
                                }}
                            >
                                <Text style={styles.titleButton}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity   
                                style={[
                                    styles.button,
                                    {
                                        opacity: isCheckedConfirm ? 1 : 0.5,
                                        visible: isCheckedConfirm ? true : false,
                                    }
                                ]}
                                onPress={() => {
                                    if (isCheckedHidden) {
                                        saveStatusCode(code, isCheckedHidden);
                                    }
                                    onConfirm();
                                    setVisible(false);
                                }}
                            >
                                <Text style={styles.titleButton}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                            style={styles.checkbox}
                            value={isCheckedHidden}
                            onValueChange={setCheckedHidden}
                            color={isCheckedHidden ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Don't show again</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalPlolicy

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginTop: 250,
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
    button: {
        backgroundColor: Colors.blue,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
    },
    titleButton: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitle: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: Colors.primary,
        color: Colors.white,
        padding: 35,
    },
    modalContent: {
        fontSize: 15,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 4,
    },
    content: {
        paddingTop: 20,
        paddingHorizontal: 35,
        paddingBottom: 35,
    },
});