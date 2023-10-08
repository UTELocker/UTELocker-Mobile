import React, { useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListHistories from './ListHistories';
import { MONTH } from '../../../constants/filter';
import { getLabelMonth } from '../../../utils/filter';
import { getLabelStatus, handleTransferType } from '../../../utils/wallet';
import { STATUS_TRANSFER, TYPE_TRANSFER } from '../../../constants/wallet';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants/styles';
import { FlatList } from 'react-native';

const convertToArr = (obj) => {
    return Object.keys(obj).map((item) => {
        return obj[item];
    })
}

const renderFilter = (isFilterMonth, setFilterMonth, setFilterTypePayment, bottomSheetModalRef) => {
    const data = isFilterMonth ? convertToArr(MONTH) : convertToArr(TYPE_TRANSFER);
    return data.map((item, index) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (isFilterMonth) {
                        setFilterMonth(item);
                    } else {
                        setFilterTypePayment(item);
                    }
                    bottomSheetModalRef.current?.dismiss();
                }}
                style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.lightGray2,
                }}
                key={index}
            >
                <Text
                    style={{
                        fontSize: 16,
                    }}
                >
                    {
                        isFilterMonth ? getLabelMonth(item) : handleTransferType(item)
                    }
                </Text>
            </TouchableOpacity>
        )
    })
}

const ContentHistories = () => {
    const [ filterMonth, setFilterMonth ] = React.useState(MONTH.ALL_MONTH);
    const [ filterTypePayment, setFilterTypePayment ] = React.useState(TYPE_TRANSFER.ALL_TYPE);
    const [ filterStatus, setFilterStatus ] = React.useState(STATUS_TRANSFER.ALL_STATUS);
    const [ isFilterMonth, setIsFilterMonth ] = React.useState(true);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ['75%'];
  
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

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
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                paddingVertical: 10,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    handlePresentModalPress();
                                    setIsFilterMonth(true);
                                }}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                }}
                            >
                                <Text>
                                    {
                                        getLabelMonth(filterMonth)
                                    }
                                </Text>
                                <MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.black}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    handlePresentModalPress();
                                    setIsFilterMonth(false);
                                }}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}
                            >
                                <Text>
                                    {
                                        handleTransferType(filterTypePayment)
                                    }
                                </Text>
                                <MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.black}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                data={convertToArr(STATUS_TRANSFER)}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setFilterStatus(item);
                                            }}
                                            style={{
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: 10,
                                                borderRadius: 10,
                                                width: 100,
                                                height: 40,
                                                backgroundColor: filterStatus === item ? Colors.primary : Colors.lightGray2,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: filterStatus === item ? Colors.white : Colors.dark,
                                                }}
                                            >
                                                {
                                                    getLabelStatus(item)
                                                }
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={item => item}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingVertical: 10,
                                    backgroundColor: Colors.white,
                                }}
                            />
                        </View>
                        <ListHistories
                            filterMonth={filterMonth}
                            filterTypePayment={filterTypePayment}
                        />
                    </View>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={0}
                        snapPoints={snapPoints}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                backgroundColor: Colors.lightGray2,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                {
                                    isFilterMonth ? 'Filter Month' : 'Filter Type Payment'
                                }
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    bottomSheetModalRef.current?.dismiss();
                                }}
                            >
                                <MaterialIcons name="close" size={30} color={Colors.black}/>
                            </TouchableOpacity>
                        </View>
                        <BottomSheetScrollView
                            style={{
                                backgroundColor: Colors.white,
                            }}
                        >
                            {
                                renderFilter(isFilterMonth, setFilterMonth, setFilterTypePayment, bottomSheetModalRef)
                            }
                        </BottomSheetScrollView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
};

export default ContentHistories;