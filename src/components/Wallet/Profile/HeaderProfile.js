import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/styles';

const HeaderProfile = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <Text style={styles.name}>Jane Doe </Text>
            </View>
        </View>
    );
}

export default HeaderProfile;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
    },
    headerContent: {
        paddingTop: 60,
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: Colors.lightGray2,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '600',
    },
});