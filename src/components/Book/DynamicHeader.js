import * as React from 'react';
import { Text, View, StyleSheet, Animated, ScrollView, Alert, TouchableOpacity, Pressable } from 'react-native';
import { Colors } from '../../constants/styles';
import { WINDOW_HEIGHT } from '../../utils/dimensionScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CalendarSelectDate from './CalendarSelectDate';
import { useRef, useState } from 'react';

const DynamicHeader = ({
  dateStart,
  dateEnd,
  setDateStart,
  setDateEnd,
}) => {

  const [isShowLowerHeader, setIsShowLowerHeader] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');
  
  const cardDateViewAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 1.1],
          extrapolate: 'clamp',
        }),
      }
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  }
  const cardUpperHeaderAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 210],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  }

  const buttonAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 210],
          outputRange: [0, -210],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: [0, 150],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: [1, 0.5],
          extrapolate: 'clamp',
        }),
      }
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 160],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  }

  const cardDateStartAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -17],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
  const cardDateEndAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -52],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
  const cardDateIconAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -23],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
  const textFindLockerAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 200],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
  
  const iconReloadAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 100, 220, 230],
      outputRange: [0, 0, 1, 0],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 150],
          outputRange: [1, 1.9],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 150],
          outputRange: [1, 1.9],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 125],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 250],
          outputRange: [0, -140],
          extrapolate: 'clamp',
        }),
      }
    ],
  }

  const iconSearchAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  }

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
  const CardDate = ({date}) => {
    if (date !== null) {
      return (
        <View style={styles.cardDate}>
          <Text style={styles.cardDateText}>
            {date.date}
          </Text>
          <Text style={styles.cardDateTimeText}>
            {date.time}
          </Text>
        </View>
      )
    } 
    return (
      <View style={styles.cardDate}>
        <Text style={styles.cardDateNullText}>
          Select Date
        </Text>
      </View>
    )
  };

  const CardDateSmall = ({date}) => {
    if (date !== null) {
      return (
        <View style={styles.cardDateSmall}>
            <Text style={styles.cardDateText}>
              {date.date}
            </Text>
            <Text style={styles.cardDateTimeText}>
              {date.time}
            </Text>
        </View>
      )
    }
    return (
      <View style={styles.cardDateSmall}>
        <Text style={styles.cardDateNullText}>
          Select Date
        </Text>
      </View>
    )
  };


  return (
    <View 
      style={{
        flex:1,
      }}
    >
      <View style={styles.upperHeaderPlaceholder} />
      <View
        style={[
          styles.header, 
          {
            zIndex: isShowLowerHeader ? 100 : 0,
          }
        ]}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.gray,
            position: 'absolute',
            alignSelf: 'center',
            top: 40,
          }}
        >
          Search Locker
        </Text>
        <Animated.View style={[styles.upperHeader,cardUpperHeaderAnimation,]}>
          <CardDateSmall date={dateStart} />
          <AntDesign name="doubleright" size={25} color={Colors.gray} />
          <CardDateSmall date={dateEnd} />
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Select Date');
            }}
            style={{
              width: 50,
              height: 75,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name="reload-circle" size={50} color={Colors.white} />
          </TouchableOpacity>
          
        </Animated.View>
        <View style={styles.lowerHeader}>
          <Animated.View
            style={[styles.cardDateContainer, cardDateViewAnimation]}
          >
            <Animated.View
              style={cardDateStartAnimation}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Select Date Start');
                }}
              >
                <CardDate date={dateStart} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={cardDateIconAnimation}
            >
              <AntDesign name="doubleright" size={35} color={Colors.gray} />
            </Animated.View>
            <Animated.View
              style={cardDateEndAnimation}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Select Date End');
                }}
              >
                <CardDate date={dateEnd} />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View 
            style={[{
              position: 'absolute',
              left: 120,
              bottom: 25,
            },iconReloadAnimation]}
          >
            <TouchableOpacity
                onPress={() => {
                  Alert.alert('Reset Date');
                }}
            >
              <Ionicons name="reload-circle" size={30} color={Colors.white} />
            </TouchableOpacity>
          </Animated.View >
          <AnimatedTouchableOpacity
            onPress={() => {
              Alert.alert('Find date');
            }}
            style={[
              styles.findLockerButton,
              buttonAnimation,
            ]}
          >
            <Animated.View  
              style={[{
                position: 'absolute',
                left: 20,
              },iconSearchAnimation]}
            >
              <Ionicons name="search-circle" size={30} color={Colors.white} />
            </Animated.View >
            <Animated.Text 
              style={[
                {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.white,
                  marginLeft: 20,
                }
                ,textFindLockerAnimation
              ]}
            >
              Find Locker
            </Animated.Text>
          </AnimatedTouchableOpacity>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        onScroll={e => {
          const scrollY = e.nativeEvent.contentOffset.y;

          scrollDirection.current = scrollY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = scrollY;

          animatedValue.setValue(scrollY);
          if (scrollY == 0 && !isShowLowerHeader) {
            setIsShowLowerHeader(true)
          } 
          if (scrollY !== 0 && isShowLowerHeader) {
            setIsShowLowerHeader(false)
          }
        }}

        onScrollEndDrag={() => {
            scrollViewRef.current?.scrollTo({
              y: scrollDirection.current === 'down' ? 250 : 0,
              animated: true,
          })
        }}
      >
        <View style={styles.paddingForHeader} />
        <View
          style={styles.scrollViewContent}
        >
          <Text style={styles.scrollText}>
            Scroll Me
          </Text>
          <CalendarSelectDate />
        </View>
      </ScrollView>
    </View>
  );
};

export default DynamicHeader;

const styles = StyleSheet.create({
    header: {
      position: 'absolute',
      width: '100%',
      backgroundColor: Colors.lightGray2,
    },
    upperHeader: {
      height: 100,
      backgroundColor: Colors.primary,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    lowerHeader: {
      height: 250,
      backgroundColor: Colors.lightGray2,
    },
    scrollViewContent: {
      height: WINDOW_HEIGHT,
      backgroundColor: Colors.lightGray2,
    },
    paddingForHeader: {
      height: 250,
    },
    upperHeaderPlaceholder: {
      height: 100,
      backgroundColor: Colors.purple,
    },
    cardDateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 200,
      borderRadius: 20,
      marginHorizontal: 20,
      backgroundColor: Colors.white,
      paddingBottom: 10,
    },
    cardDate: {
      width: 120,
      height: 150,
      backgroundColor: Colors.lightGray2,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardDateText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.black,
    },
    cardDateTimeText: {
      fontSize: 15,
      fontWeight: '400',
      color: Colors.black,
    },
    cardDateNullText: {
      fontSize: 20,
      fontWeight: '500',
      color: Colors.gray,
    },
    findLockerButton: {
      width: 200,
      height: 50,
      borderRadius: 40,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      flexDirection: 'row',
    },
    cardDateSmall: {
      width: 130,
      height: 70,
      backgroundColor: Colors.lightGray2,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
});