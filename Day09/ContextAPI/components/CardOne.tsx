import { View, Text } from 'react-native'
import React from 'react'
import CardTwo from './CardTwo'

const CardOne = () => {
  return (
    <View>
      <Text>I am Card 1</Text>
      <CardTwo/>
    </View>
  )
}

export default CardOne