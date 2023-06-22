import React, { useState } from "react";
import { View,Text } from "react-native";

interface ICounter{
    counter: number
}

const Child=(props:ICounter)=>{
    return <View>
        <Text style={{color:"red"}}>{props.counter}</Text>
    </View>
}

export default Child;