import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { Colors } from "../../constants/styles";
import * as SecureStore from 'expo-secure-store';
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

async function saveStatusCode(key, value) {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
}

const ContentPolicy = ({
    code,
    title,
    content,
    onClose,
    onConfirm,
}) => {

    const [isCheckedHidden, setCheckedHidden] = useState(false);
    const [isCheckedConfirm, setCheckedConfirm] = useState(false);
    return (
        <View style={styles.modal}>
            <Text style={styles.modalTitle}>{title}</Text>
            <BottomSheetScrollView style={styles.modalContent}>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.content}>{content}</Text>

            </BottomSheetScrollView>
            <View style={styles.modalFooter}>
                <View style={styles.section}>
                    <Checkbox
                    style={styles.checkbox}
                    value={isCheckedConfirm}
                    onValueChange={setCheckedConfirm}
                    color={isCheckedConfirm ? '#4630EB' : undefined}
                    />
                    <Text style={styles.paragraph}>
                        I agree with the terms and conditions
                    </Text>
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
                        }}
                    >
                        <Text style={styles.titleButton}>Deny</Text>
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
                        }}
                    >
                        <Text style={styles.titleButton}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ContentPolicy

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
        backgroundColor: Colors.white,
        flex: 1,
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
    content: {
        fontSize: 15,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 4,
    },
    modalContent: {
        paddingTop: 20,
        paddingHorizontal: 35,
        paddingBottom: 35,
        overflow: 'scroll',
    },
    modalFooter: {
        paddingHorizontal: 35,
        paddingVertical: 20,
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
});