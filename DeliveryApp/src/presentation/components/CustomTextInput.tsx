import { View, Text, Image, KeyboardType, TextInput } from 'react-native'
import React from 'react'

interface Props {
    image: string,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => any
}

const CustomTextInput = ({image, placeholder, value, keyboard, secureTextEntry = false, property, onChangeText } : Props) => {
    //'../../../../assets/logo.png'
    // '../../../../assets/email.png'
  return (

    <View className="flex-row justify-center  self-start">
        <Image source={image}  className="w-9 h-9 self-center mr-4 " />
        <TextInput 
                placeholder={placeholder} 
                keyboardType={keyboard}
                secureTextEntry = {secureTextEntry}
                value={value}
                onChangeText={(t) => onChangeText( property, t)}
                className="border-b-2  border-b-gray-200 w-72 "
        />
  </View>
  )
}

export default CustomTextInput