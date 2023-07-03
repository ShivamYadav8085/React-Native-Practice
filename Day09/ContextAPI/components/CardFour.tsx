import { View, Text, TextInput, Button } from 'react-native'
import React,{useContext, useState} from 'react'
import { NameContext } from '../NameContext'

const CardFour = () => {
    const {name, setName} = useContext(NameContext);
    const [ newName,setNewName] = useState("")
  return (
    <View>
      <Text>My name is {name}</Text>
      <TextInput value={newName} onChangeText={setNewName}/>
    <Button title='Change Name' onPress={()=>setName(newName)}/>
    </View>
  )
}

export default CardFour