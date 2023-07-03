import { View, Text } from 'react-native'
import React from 'react'
import CardFour from './CardFour'

const CardThree = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

    <View style={{ backgroundColor: "#CBFFA9", width: 250, height: 300, borderRadius: 20, padding: 30, shadowColor: "#CBFFA9", shadowRadius: 2, elevation: 30 }}>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:"200"}}>I am Card 3</Text>
      <CardFour/>
    </View>
    </View>
  )
}

export default CardThree