import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NameContext } from './NameContext'
import CardOne from './components/CardOne'

const App = () => {
  const [name,setName] = useState<string>("Shivam")
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, justifyContent:"center", alignItems:'center', backgroundColor:"#FF9B9B", borderRadius:20, borderColor:"#f55b5b", borderWidth:1}}>
        <View>
          <Text style={{textAlign:'center', fontWeight:"300", fontSize:30}}>My Name is {name}</Text>
          <NameContext.Provider value={{name,setName}}>
            <CardOne/>
          </NameContext.Provider>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App