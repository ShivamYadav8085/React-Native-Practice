import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'



type Props = NativeStackScreenProps<any,"Home">;

const Home = ({navigation}:Props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer,{justifyContent:"center"}]}>
            <View style={[styles.box,{height:400}]}>
                    <Text style={styles.titleText}>Home</Text>
  
                    <TouchableOpacity style={[styles.button,styles.registerButton]} onPress={()=>navigation.navigate("Setting")}>
                        <Text style={styles.textWhite}>Setting</Text>
                    </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default Home