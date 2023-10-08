import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from "react-native"
import { Colors } from "../../../constants/styles"
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { TextInput } from "react-native";

const ContentDetailProfile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState(null);
    const CONST_PROFILE = [
        { 
            title: 'Name',
            value: 'Jane Doe',
            onPress: null,
        },
        {
            title: 'Phone',
            value: '0123456789'.replace(/\d(?=\d{3})/g, "*"),
            onPress: () => {
                setItemSelected({
                    title: 'Phone',
                    value: '0123456789',
                });
                setModalVisible(true);
            },
        },
        {
            title: 'Email',
            value: 'cog@email.com',
            onPress: () => {
                setItemSelected({
                    title: 'Email',
                    value: 'cog@email.com',
                });
                setModalVisible(true);
            },
        },
        {
            title: 'Password',
            value: '********',
            onPress: () => {
                setItemSelected({
                    title: 'Password',
                    value: '********',
                });
                setModalVisible(true);
            },
        }
    ] 

    return (
        <View style={styles.container}>
            <View style={styles.containerAvatar}>
                <Image style={styles.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            </View>
            <View style={{ paddingTop: 50, backgroundColor: Colors.white }} />
            <FlatList
                data={CONST_PROFILE}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBlockColor: '#a8a8a8',
                                borderBottomWidth: 1,
                                paddingVertical: 15,
                                paddingHorizontal: 20,
                                backgroundColor: Colors.white,
                            }}
                            onPress={() => {
                                if (item.onPress)
                                    item.onPress();
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'column',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: Colors.gray,
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '400',
                                    }}
                                >
                                    {item.value}
                                </Text>
                            </View>
                            {
                                item.onPress
                                    ? <FontAwesome5 name="chevron-right" size={24} color={Colors.gray} />
                                    : null
                            }
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.title}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setItemSelected(null);
                }}
                statusBarTranslucent={true}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        backgroundColor: Colors.white,
                        width: '100%',
                        height: '35%',
                        borderRadius: 10,
                        padding: 20,
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginBottom: 10,
                            }}>Change {itemSelected?.title}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    setItemSelected(null);
                                }}
                            >
                                <FontAwesome5 name="times" size={24} color={Colors.gray} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            fontSize: 14,
                            marginBottom: 10,
                        }}>Current {itemSelected?.title}</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '400',
                            marginBottom: 10,
                        }}>{itemSelected?.value}</Text>
                        <Text style={{
                            fontSize: 14,
                            marginBottom: 10,
                        }}>New {itemSelected?.title}</Text>
                        <TextInput
                            style={{
                                backgroundColor: Colors.lightGray2,
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                            }}
                            placeholder={`New ${itemSelected?.title}`}
                        />
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.blue,
                                paddingVertical: 10,
                                borderRadius: 10,
                                marginTop: 20,
                            }}
                            onPress={() => {
                                setModalVisible(false);
                                setItemSelected(null);
                            }}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: Colors.white,
                                fontSize: 16,
                            }}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ContentDetailProfile

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginHorizontal: 20,
    },
    containerAvatar: {
        position: 'absolute',
        alignSelf: 'center',
        top: -50,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: Colors.lightGray2,
        marginBottom: 10,
        zIndex: 100,
    },
})