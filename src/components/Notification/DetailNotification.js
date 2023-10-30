import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDetailNotification } from '../../api/notificationApi';
import { ActivityIndicator } from 'react-native';
import { STATUS_CODE } from '../../constants/systemConstant';
import { NOTIFICATION_TYPE } from '../../constants/notificationConstant';
import DetailBookingNotification from './DetailBookingNotification';

const DetailNotification = ({ notification }) => {
    const [notificationDetail, setNotificationDetail] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchNotificationDetail = async () => {
            const res = await getDetailNotification(notification.id);
            if (res.status === STATUS_CODE.OK) {
                setNotificationDetail(res.data.data);
                console.log(res.data.data);
            } else {
                Alert.alert('Error', res.data.message);
            }
            setLoading(false);
        };
        fetchNotificationDetail();
    }, [notification]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }

    const renderDetailOfType = (type) => {
        switch (type) {
            case NOTIFICATION_TYPE.BOOKING:
                return (
                    <DetailBookingNotification detailContent={notificationDetail.content_detail} />
                );
            case NOTIFICATION_TYPE.PAYMENT:
                return (
                    <View>
                        <Text>Payment</Text>
                    </View>
                );
            default:
                return (
                    <View>
                        <Text>Default</Text>
                    </View>
                );
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Detail</Text>
            {renderDetailOfType(notificationDetail.type)}
        </View>
    )
}

export default DetailNotification

const styles = StyleSheet.create({})
