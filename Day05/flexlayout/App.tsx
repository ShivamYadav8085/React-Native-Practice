import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './components/login'
import Register from './components/register'

const App = ():JSX.Element => {
  return (
    <SafeAreaView>
      <View style={{height:"100%"}}>
        {/* <Login/> */}
        <Register/>
      </View>
    </SafeAreaView>
  )
}

export default App