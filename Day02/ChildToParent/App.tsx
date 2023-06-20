/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DisplayValue from './src/DisplayValue';







function App(): JSX.Element {


  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Text>Child to Parent</Text>
      <DisplayValue></DisplayValue>
    </View>
  );
}


export default App;
