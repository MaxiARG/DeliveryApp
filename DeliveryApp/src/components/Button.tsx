import { View, Text, ViewProps, TouchableOpacity } from 'react-native'
import React from 'react'

type Props ={
    title: string,
    onPress: () => void,
    color: string,
} & ViewProps;

export default function Button(props: Props) {
    const {title, onPress, color } = props;

  return (
    <TouchableOpacity 
        onPress={onPress}
        className='rounded-xl h-12 justify-center items-center'
     style={{backgroundColor: color }}
     >
      <Text className='color-white font-bold w-2/3 h-2/3 align-middle text-center'>{title}</Text>
    </TouchableOpacity>
  )
}