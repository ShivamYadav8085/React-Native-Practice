import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react'
import axios, { all } from 'axios';
import { RootParamList, TaskType } from '../Navigation';
import { useFocusEffect } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
      ListEmptyComponent={()=>{
        return <View style={[styles.tableData,{backgroundColor:"#F2EAD3"}]}>
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={styles.emptyListText}>List is Empty</Text>
            </View>
        </View>
      }}
      ListHeaderComponent={()=>{
        return <View style={[styles.tableData,{backgroundColor:"#3F2305"}]}>
            <View style={{flex:1}}>
                <Text style={styles.tableHeading}>ID</Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.tableHeading}>Task</Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.tableHeading}>Status</Text>
            </View>
            <View style={{flex:1}}>
                <Text></Text>
            </View >
            <TouchableOpacity onPress={()=>navigation.navigate("Create")} style={{flex:1}}>
                <Text style={styles.tableHeading}>Add</Text>
            </TouchableOpacity>
                </View>
      }}
      keyExtractor={(item:TaskType,index:number)=>index+""}
      renderItem={({item,index})=>{
        return <View style={[styles.tableData,{backgroundColor:index%2?"#F2EAD3":"#DFD7BF"}]}>
            <View style={{flex:1}}>
                <Text>{item.id}</Text>
            </View>
            <View style={{flex:1}}>
                <Text>{item.taskName}</Text>
            </View>
            <View style={{flex:1}}>
        <BouncyCheckbox isChecked={item.isCompleted} disabled/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Update",item)} style={{flex:1}}>
                <Image style={styles.icon} source={{uri:"https://pics.freeicons.io/uploads/icons/png/9200365481558965373-64.png"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDelete(item.id)} style={{flex:1}}>
                <Image style={styles.icon} source={{uri:"https://pics.freeicons.io/uploads/icons/png/2790131631558965374-64.png"}} />
            </TouchableOpacity>
            <Text></Text>
        </View>
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        height:20,
        width:20
    },
    emptyListText:{
        color:"#3F2305",
        fontWeight:"bold"
    },
    tableHeading:{
        color:"white",
        fontWeight:"bold"
    }
    ,
    tableData:{
        padding:10,
        flex:1,
        flexDirection:'row', 
        justifyContent:'space-around',
        alignItems:"center",
        borderWidth:1,
        borderColor:"black"
    }
})

export default Home