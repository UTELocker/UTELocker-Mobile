import { StyleSheet, TouchableOpacity, Text, Alert, View, Button } from "react-native";
import { Colors } from "../constants/styles";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/dimensionScreen";
import { Animated } from "react-native";
import { useRef } from "react";
import { Svg, Defs, Rect, Mask } from 'react-native-svg';

const ScannerScreen = () => {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

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
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
      getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`data: ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <View>
            <Text>Requesting for camera permission</Text>
        </View>
    }
    if (hasPermission === false) {
        return <View>
            <Text>No access to camera</Text>
        </View>
    }

    const SvgCircle = (props) => {
        return (
          <Svg height="100%" width="100%">
            <Defs>
              <Mask id="mask" x="0" y="0" height="100%" width="100%">
                <Rect height="100%" width="100%" fill="#fff" />
                <Rect
                  height="300"
                  width="300"
                  fill="#000"
                  rx="30"
                  ry="30"
                  x="50%"
                  y="50%"
                  transform="translate(-150, -150)"
                />
              </Mask>
            </Defs>
            <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.5)" mask="url(#mask)" fill-opacity="0" />
          </Svg>
        );
      }

    return (
        <View style={styles.cameraContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: Colors.primary,
                    paddingTop: 40,
                }}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => navigation.navigate('HomeApp')}
                >
                    <AntDesign name="arrowleft" size={35} color={Colors.white} />                
                </TouchableOpacity>
                <Text
                    style={{
                        flex: 9,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: Colors.white,
                        textAlign: 'center',
                    }}
                >
                    Scan your QR code to open
                </Text>
            </View>
            <View
                style={styles.container}
            >
                <View style={{
                    position: 'static',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    flex: 1,
                    zIndex: 200,
                }}>
                    <SvgCircle />
                </View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={
                        Platform.OS === "android"
                          ? {
                            position: "absolute",
                            top: 0,
                            transform: [{ translateX: WINDOW_WIDTH / 2 }],
                            right: 0,
                            bottom: 0,
                            width: WINDOW_WIDTH * 2.5,
                            height: WINDOW_HEIGHT * 1,
                            }
                          : StyleSheet.absoluteFillObject
                      }
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                />
            </View>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

export default ScannerScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    cameraContainer: {
        flex: 1,
    }
});