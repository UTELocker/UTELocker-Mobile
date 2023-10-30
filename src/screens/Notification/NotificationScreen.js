import { Pressable, StyleSheet, Text, View } from "react-native"
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/ui/Header";
import { FlatList } from "react-native";
import { NOTIFICATION_TYPE } from "../../constants/notificationConstant";
import { getLabelNotificationType } from "../../utils/filter";
import { Colors } from "../../constants/styles";
import ListNotification from "../../components/Notification/ListNotification";

const NotificationScreen = () => {
    const navigation = useNavigation();
    const [filterChoice, setFilterChoice] = useState("all");
    const filter = [
      {
        label: "All",
        value: "all",
      },
      {
        label: getLabelNotificationType(NOTIFICATION_TYPE.PAYMENT),
        value: NOTIFICATION_TYPE.PAYMENT,
      },
      {
        label: getLabelNotificationType(NOTIFICATION_TYPE.BOOKING),
        value: NOTIFICATION_TYPE.BOOKING,
      },
    ];

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: "none"
            }
          });
          return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
          });
    }, []);

    return (
    <View style={{ flex: 1 }}>
      <Header title="Notifications" buttons={{ isBack: true }} />
      <FlatList 
        data={filter}
        renderItem={({ item }) => (
          <Pressable style={[
            styles.btnFilter,
            item.value !== filterChoice && { backgroundColor: Colors.white }
          ]}
            onPress={() => setFilterChoice(item.value)}
          >
            <Text style={[
              styles.labelFilter,
              item.value !== filterChoice && { color: Colors.dark }
            ]}>{item.label}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.value}
        horizontal={true}
        style={{ flex: 1, marginHorizontal: 10 }}
      />
      <ListNotification filterChoice={filterChoice} />
    </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
  btnFilter: {
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    marginTop: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  labelFilter: {
    color: Colors.white,
    fontWeight: "bold",
  },
});
