import React from 'react';
import { StyleSheet, Text, View, FileList } from 'react-native';
import { handleStatus, handleStatusColor, isActivity } from '../../helpers/bookingHelper';
import Button from '../ui/Button';
import { useNavigation } from '@react-navigation/native';

const DetailBookingNotification = ({ detailContent }) => {
    const navigation = useNavigation();
    const dataRender = [
        {
            label: 'Locker Code',
            value: detailContent.locker_code
        },
        {
            label: 'Locker address',
            value: detailContent.address
        },
        {
            label: 'Locker Slot code',
            value: detailContent.locker_slot_code
        },
        {
            label: 'Status',
            value: handleStatus(detailContent.status),
            options: {
                styles: {
                    color: handleStatusColor(detailContent.status)
                }
            }
        },
        {
            label: 'Date Booking',
            value: detailContent.start_date + ' - ' + detailContent.end_date
        },

    ]

    return (
        <View style={{ flex: 1 }}>
            {
                dataRender.map((item, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row', marginVertical: 5, width: '100%' }}>
                            <Text style={{ fontWeight: 'bold', flex: 2, fontSize: 16}}>{item.label}</Text>
                            <Text style={[
                                { paddingHorizontal:10, flex: 5, fontSize: 16},
                                item.options?.styles
                            ]}>{item.value}</Text>
                        </View>
                    )
                })
            }
            {
                isActivity && (
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Go to booking"
                            onPress={() => {
                                navigation.navigate('DetailLocker', {
                                    lockerId: detailContent.locker_id
                                })
                            }}
                        />
                    </View>
                )
            }
        </View>
    )
}

export default DetailBookingNotification

const styles = StyleSheet.create({});