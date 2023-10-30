import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/styles';

function Button({ 
  title,
  onPress,
  styleButton = {
    backgroundColor: Colors.primary,
  },
  styleText = {
    color: Colors.white,
  },
  icon = null,
}) {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.button,
            styleButton,
        ]}
    >
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {
                icon
            }
          <Text
              style={[
                  styles.buttonText,
                  styleText,
              ]}
          >
              {title}
          </Text>
        </View>

    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
      paddingHorizontal: 20,
      alignContent: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      paddingVertical: 10,
      borderRadius: 10
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
});