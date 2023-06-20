import React from "react";
import { Button } from "react-native";

interface IResetButton{
    title:string,
    resetFunction:Function
}



const ResetButton = (props:IResetButton)=>{
    const onPressHandler = ()=>{
        props.resetFunction();
    }
    return <Button title={props.title} onPress={onPressHandler} color={"red"}/>
}

export default ResetButton;