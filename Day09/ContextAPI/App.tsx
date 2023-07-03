import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NameContext } from './NameContext'
import CardOne from './components/CardOne'

const App = () => {
  const [name,setName] = useState<string>("Shivam")
  return (
    <SafeAreaView>
      <Text>My Name is {name}</Text>
    <NameContext.Provider value={{name,setName}}>
      <CardOne/>
    </NameContext.Provider>
    </SafeAreaView>
  )
}

export default App