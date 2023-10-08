import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider, TouchableOpacity } from '@gorhom/bottom-sheet';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMemo } from 'react';
import { useCallback } from 'react';
import DetailNotification from './DetailNotification';
import { useState } from 'react';

const ContentNotification = ({ notification }) => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['50%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const [itemSelected, setItemSelected] = useState(null);

    const [listNotifications, setNotification] = useState([
        {
            id: 1,
            title: 'Notification 1',
            description: 'Description 1',
            date: '10/09',
            isRead: false,
        },
        {
            id: 2,
            title: 'Notification 2',
            description: 'Description 2',
            date: '10/09',
            isRead: false,
        },
        {
            id: 3,
            title: 'Notification 3',
            description: 'Description 3',
            date: '10/09',
            isRead: true,
        },
        {
            id: 4,
            title: 'Notification 4',
            description: 'Description 4',
            date: '10/09',
            isRead: true,
        },
        {
            id: 5,
            title: 'Notification 5',
            description: 'Description 5',
            date: '10/09',
            isRead: true,
        },
        {
            id: 6,
            title: 'Notification 6',
            description: 'Description 6',
            date: '10/09',
            isRead: true,
        },
        {
            id: 7,
            title: 'Notification 7',
            description: 'Description 7',
            date: '10/09',
            isRead: true,
        },
        {
            id: 8,
            title: 'Notification 8',
            description: 'Description 8',
            date: '10/09',
            isRead: true,
        },
        {
            id: 9,
            title: 'Notification 9',
            description: 'Description 9',
            date: '10/09',
            isRead: true,
        },
        {
            id: 10,
            title: 'Notification 10',
            description: 'Description 10',
            date: '10/09',
            isRead: true,
        },
        {
            id: 11,
            title: 'Notification 11',
            description: 'Description 11',
            date: '10/09',
            isRead: true,
        },
        {
            id: 12,
            title: 'Notification 12',
            description: 'Description 12',
            date: '10/09',
            isRead: true,
        },
        {
            id: 13,
            title: 'Notification 13',
            description: 'Description 13',
            date: '10/09',
            isRead: true,
        },
    ]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
            <View style={{
                flex: 1,
            }}
            >
                <View
                    style={{ flex: 1, }}
                >
                    <FlatList
                        data={listNotifications}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#e8e8e8',
                                backgroundColor: item.isRead ? '#fff' : '#f5f5f5',
                                paddingHorizontal: 20,
                            }}
                                onPress={() => {
                                    handlePresentModalPress();
                                    setItemSelected(item);
                                    setNotification(listNotifications.map((notification) => {
                                        if (notification.id === item.id) {
                                            return {
                                                ...notification,
                                                isRead: true,
                                            }
                                        }
                                        return notification;
                                    }))
                                }}
                            >
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    marginBottom: 5,
                                }}>{item.title}</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginBottom: 5,
                                }}>{
                                        item.description.length > 50
                                            ? item.description.substring(0, 50) + '...'
                                            : item.description
                                }</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: '#a8a8a8'
                                }}>{item.date}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                >
                    <DetailNotification item={itemSelected} />
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
    )
}

export default ContentNotification;