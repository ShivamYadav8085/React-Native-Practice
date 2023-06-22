
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text,View } from "react-native";
import TakeInput from "./TakeInput";
import TodoList from "./TodoList";


const DisplayValue = ()=>{
    const [textValue,setTextValue] = useState<string[]>([])
    const [warn, setWarn] = useState<boolean>(false);
    return <View>
        {warn&&<View>
                <Text>First complete one of the task from given Todo list</Text>
            </View>}
        <TakeInput changeTextValue={(value:string)=>{
            setTextValue(prev=>{
                if(prev.length<5){
                    return [...prev,value]
                }else{
                    setWarn(true)
                    return prev
                }
            });
        }}></TakeInput>
        {/* <FlatList data={textValue} renderItem={item=><View><Text>item</Text></View>}/> */}
        {textValue.map((val,index)=>{
            return<View key={index}>
               <TodoList todo={val}></TodoList>
            </View> 
        })}
    </View>
}

export default DisplayValue;