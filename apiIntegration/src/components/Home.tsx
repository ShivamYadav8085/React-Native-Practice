import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react'
import axios, { all } from 'axios';
import { RootParamList, TaskType } from '../Navigation';
import { useFocusEffect } from '@react-navigation/native';

type Props=NativeStackScreenProps<RootParamList,"Home">;

const URL = `https://649bc4bf048075719236e4a4.mockapi.io/api/Task/`

const Home = ({navigation}:Props) => {
    const[allTask,setAllTask] = useState<TaskType[]>();
    const getAllTask  = async ()=>{
        try{
            const res = await axios.get(URL)
            setAllTask((prev?:TaskType[]):TaskType[]=>{
                const newTaskList = res.data as TaskType[]
                return [...newTaskList]
            })
        }catch(error){
            console.log(error);
        }
    }

    const handleDelete = async (id:number)=>{
        try{
           const data = await (await axios.delete(URL+id)).data as TaskType[]
            setAllTask(data);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getAllTask()
    },[allTask])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getAllTask();
        });
    
        return unsubscribe;
      }, [navigation]);
  return (
    <View>
      <FlatList data={allTask}
      ListHeaderComponent={()=>{
        return <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <Text>ID</Text>
            </View>
            <View>
                <Text>Task</Text>
            </View>
            <View>
                <Text>Status</Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                <Text>Add</Text>
            </TouchableOpacity>
                </View>
      }}
      keyExtractor={(item:TaskType,index:number)=>index+""}
      renderItem={({item})=>{
        return <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <Text>{item.id}</Text>
            </View>
            <View>
                <Text>{item.taskName}</Text>
            </View>
            <View>
                <Text>{item.isCompleted?"Completed":"Need to Do"}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Update",item)}>
                <Text>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDelete(item.id)}>
                <Text>Delete</Text>
            </TouchableOpacity>
            <Text></Text>
        </View>
      }}/>
    </View>
  )
}

export default Home