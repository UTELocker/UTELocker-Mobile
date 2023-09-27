import { View, StyleSheet } from "react-native"
import HeaderBook from "../../src/components/Book/HeaderBook"
import DynamicHeader from "../components/Book/DynamicHeader";
import { useState } from "react";

const ManualBookingLockerScreen = () => {
  const [dateStart, setDateStart] = useState({
    date: '2021-10-10',
    time: '10:00',
  });
  const [dateEnd, setDateEnd] = useState({
    date: '2021-10-10',
    time: '10:00',
  });
  return (
      <View
          style={styles.container}
      >
          <HeaderBook
              title={'Manual Booking'}
          />
          <DynamicHeader
              dateStart={dateStart} 
              dateEnd={dateEnd}
              setDateStart={setDateStart}
              setDateEnd={setDateEnd}
          />
      </View>
  )
}

export default ManualBookingLockerScreen


const styles = StyleSheet.create({  
    container: {
      flex: 1,
    },
  });