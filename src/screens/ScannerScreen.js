import { StyleSheet, TouchableOpacity, Text, Alert, View, Button } from "react-native";
import { Colors } from "../constants/styles";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const ScannerScreen = () => {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
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

    return (
        <View style={styles.containerScanner}>
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
                style={{
                    height: '80%',
                    width: '100%',
                }}
            >
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[StyleSheet.absoluteFillObject, styles.cameraContainer]}
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
        height: '100%',
        width: '100%'
    },

});