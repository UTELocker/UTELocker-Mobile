import React from 'react'
import { View } from 'react-native'
import { Colors } from '../../../../constants/styles'
const Card = ({children}) => {
    return (
        <View
            style={{
                borderRadius: 10,
                backgroundColor: Colors.white,
                width: '80%',
                paddingVertical: 10,
                elevation: 5,
                shadowColor: Colors.black,
                shadowOpacity: 0.2,
                shadowRadius: 5,
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
            }}
        >
            {children}
        </View>
    )
}

export default Card