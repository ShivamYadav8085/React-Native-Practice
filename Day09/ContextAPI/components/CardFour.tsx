import { View, Text, TextInput, Button } from 'react-native'
import React,{useContext, useState} from 'react'
import { NameContext } from '../NameContext'

const CardFour = () => {
    const {name, setName} = useContext(NameContext);
    const [ newName,setNewName] = useState("")
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{ backgroundColor: "#00DFA2", width: 200, height: 200, borderRadius: 20, padding: 30, shadowColor: "#00DFA2", shadowRadius: 2, elevation: 30 ,justifyContent:'center'}}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:"200"}}>My name is <Text style={{fontWeight:'bold'}}>{name}</Text></Text>
        <TextInput style={{padding:20, width:"100%"}} value={newName} onChangeText={setNewName}/>
        <Button title='Change Name' onPress={()=>setName(newName)}/>
        </View>
    </View>
  )
}

export default CardFour