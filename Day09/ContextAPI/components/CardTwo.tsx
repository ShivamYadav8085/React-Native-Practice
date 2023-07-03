import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardThree from './CardThree'

const CardTwo = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{ backgroundColor: "#FFFEC4", width: 270, height: 450, borderRadius: 20, padding: 30, shadowColor: "#FFFEC4", shadowRadius: 2, elevation: 30 }}>
            <Text style={styles.card2Text}>I am Card 2</Text>
            <CardThree/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card2Text:{
        textAlign:'center', fontSize:18, 
        fontWeight:"200"
    }
})
export default CardTwo