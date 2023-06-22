import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    todo:{
        padding:10,
        color:"green"
    },
    completedTodo:{
        padding:10,
        color:"red"
    }
})
interface ITodo{
    todo:string
}

const TodoList = (props:ITodo)=>{
    const [done, setDone] = useState<boolean>(false);

    return  <Pressable onPress={()=>setDone(prev=>!prev)} >
    <View style={done?{...styles.completedTodo}:styles.todo} >
        <Text style={done?{textDecorationLine:"line-through"}:{}}>{props.todo}</Text>
    </View>
</Pressable>
}
export default TodoList;