import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/* {label ? 
        <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text> : 
        <View style={{ margin: 0}}></View>
        } */}
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={'none'}
        keyboardType={keyboardType}
        secureTextEntry={secure ? passwordVisibility : false}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
      {
        secure ? 
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        : null
      }
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: Colors.gray,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    flex: 9,
    fontSize: 20,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});