import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList, TaskType } from '../Navigation';
import axios from 'axios';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props=NativeStackScreenProps<RootParamList,"Create">;

type newTask = {
    taskName:string,
    isCompleted:boolean
}

const URL = `https://649bc4bf048075719236e4a4.mockapi.io/api/Task/`

const Create = ({navigation}:Props) => {
    const [newTask,setNewTask] = useState<newTask>({taskName:"",isCompleted:false});
    const handleCreate = async ()=>{
        try{            
        await axios.post(URL,newTask)
        navigation.navigate("Home")
        }catch(e){
            console.error(e);
        }
    } 
  return (
    <View>
      <View>
        <TextInput value={newTask?.taskName} onChangeText={(val)=>setNewTask(prev=>({...prev,taskName:val}))}></TextInput>
        <BouncyCheckbox isChecked={newTask?.isCompleted} onPress={()=>setNewTask(prev=>({...prev,isCompleted:!prev.isCompleted}))}/>
        <TouchableOpacity onPress={handleCreate}>
            <Text>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Create