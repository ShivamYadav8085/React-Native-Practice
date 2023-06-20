import React from "react";
import { Text, View } from "react-native";

interface ICount{
    count:number
}

const Counter = (props:ICount)=>{
    return <View>
        <Text style={{color:"red", fontSize:22}}>{props.count}</Text>
    </View>
}

export default Counter;