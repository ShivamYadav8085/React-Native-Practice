import { View, Text } from 'react-native'
import React from 'react'
import CardTwo from './CardTwo'

const CardOne = () => (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{ backgroundColor: "#FFD6A5", width: "100%", height: "80%", borderRadius: 20, padding: 30, shadowColor: "#FFD6A5", shadowRadius: 2, elevation: 30 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "200" }}>I am Card 1</Text>
            <CardTwo />
        </View>
    </View>
)

export default CardOne