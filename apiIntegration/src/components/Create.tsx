import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList, TaskType } from '../Navigation';
import axios from 'axios';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles/styles';

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
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.subCard}>
          <TextInput style={styles.textInputOfSubCard} value={newTask?.taskName} onChangeText={(val)=>setNewTask(prev=>({...prev,taskName:val}))}></TextInput>
          <BouncyCheckbox size={40} text='Done' isChecked={newTask?.isCompleted} onPress={()=>setNewTask(prev=>({...prev,isCompleted:!prev.isCompleted}))}/>
          <TouchableOpacity style={styles.cardButton} onPress={handleCreate}>
              <Text style={styles.cardButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Create