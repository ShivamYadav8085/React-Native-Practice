import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/style'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList,"Setting">;

const Setting = ({navigation}:Props) => {
  return (
    <View style={[styles.container]}>
    <View style={[styles.innerContainer,{justifyContent:"center"}]}>
          <View style={[styles.box,{height:400}]}>
                  <Text style={styles.titleText}>Settings</Text>

                  <TouchableOpacity style={[styles.button,styles.registerButton]} onPress={()=>navigation.navigate("Home")}>
                      <Text style={styles.textWhite}>Home</Text>
                  </TouchableOpacity>
          </View>

      </View>
  </View>
  )
}

export default Setting