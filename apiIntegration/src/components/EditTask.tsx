import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


import { RootParamList, TaskType } from '../Navigation';
import axios from 'axios';

type Props=NativeStackScreenProps<RootParamList,"Update">;

const URL = `https://649bc4bf048075719236e4a4.mockapi.io/api/Task/`

const EditTask = ({route,navigation}:Props) => {
    const taskDetail = route.params as TaskType
    const [updatedTask,setUpdatedTask] = useState<TaskType>(taskDetail);
    const handleUpdate = async ()=>{
        try{
            console.log(updatedTask);
            
        await axios.put(URL+updatedTask.id,updatedTask)
        navigation.navigate("Home")
        }catch(e){
            console.error(e);
        }
    } 
  return (
    <View>
      <View>
        <TextInput value={taskDetail.taskName} onChangeText={(val)=>setUpdatedTask(prev=>({...prev,taskName:val}))}></TextInput>
        <BouncyCheckbox isChecked={taskDetail.isCompleted} onPress={()=>setUpdatedTask(prev=>({...prev,isCompleted:!prev.isCompleted}))}/>
        <TouchableOpacity onPress={handleUpdate}>
            <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditTask