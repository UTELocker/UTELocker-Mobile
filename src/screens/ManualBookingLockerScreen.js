import { View, StyleSheet } from "react-native"
import HeaderBook from "../../src/components/Book/HeaderBook"
import DynamicHeader from "../components/Book/DynamicHeader";
import { useState } from "react";

const ManualBookingLockerScreen = () => {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
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