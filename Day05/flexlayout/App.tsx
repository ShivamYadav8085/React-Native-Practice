import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './components/login'

const App = ():JSX.Element => {
  return (
    <SafeAreaView>
      <View style={{height:"100%"}}>
        <Login/>
      </View>
    </SafeAreaView>
  )
}

export default App