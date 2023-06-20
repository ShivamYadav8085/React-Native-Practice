import React from "react";
import { Text, View } from "react-native";

interface IGreeting{
    greeting:string
}

const Greetings = (props:IGreeting)=>{
    return <View>
        <Text style={{fontSize:20}}>{props.greeting}</Text>
    </View>
}

export default Greetings;