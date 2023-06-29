import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


import { RootParamList, TaskType } from '../Navigation';
import axios from 'axios';
import { styles } from './styles/styles';

type Props=NativeStackScreenProps<RootParamList,"Update">;

const URL = `https://649bc4bf048075719236e4a4.mockapi.io/api/Task/`

const EditTask = ({route,navigation}:Props) => {
    const taskDetail = route.params as TaskType
    const [updatedTask,setUpdatedTask] = useState<TaskType>(taskDetail);
    const handleUpdate = async ()=>{
        try{            
        await axios.put(URL+updatedTask.id,updatedTask)
        navigation.navigate("Home")
        }catch(e){
            console.error(e);
        }
    } 
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.subCard}>
                <TextInput style={styles.textInputOfSubCard} value={updatedTask.taskName} onChangeText={(val)=>setUpdatedTask(prev=>({...prev,taskName:val}))}></TextInput>
            <BouncyCheckbox size={40}  text='Done' isChecked={taskDetail.isCompleted} onPress={()=>setUpdatedTask(prev=>({...prev,isCompleted:!prev.isCompleted}))}/>
            <TouchableOpacity style={styles.cardButton} onPress={handleUpdate}>
                <Text style={styles.cardButtonText}>Update</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default EditTask