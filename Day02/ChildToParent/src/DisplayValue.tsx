
import React, { useState } from "react";
import { Text,View } from "react-native";
import TakeInput from "./TakeInput";

const DisplayValue = ()=>{
    const [textValue,setTextValue] = useState("")
    return <View>
        <TakeInput changeTextValue={(value:string)=>{
            setTextValue(value);
        }}></TakeInput>
        <Text>{textValue}</Text>
    </View>
}

export default DisplayValue;