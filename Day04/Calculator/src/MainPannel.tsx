import React, { useState } from "react";
import { TextInput, View } from "react-native";
import NumberPannel from "./NumberPannel";

const MainPannel =()=>{
    const [value,setValue] = useState<string>("");
    const handleInput=(v:string)=>{
        if(v==="="){
            const numbers = v.split(/[+//*/-]/)
            console.log(numbers)
        }
        setValue(prev=>prev+v);
    }
    const handleClear=()=>{
        setValue("")
    }
    return <View>
        <TextInput style={{borderWidth:1,height:50,marginTop:200}} onChangeText={handleInput} value={value}></TextInput>
        <NumberPannel onInput={handleInput} onClear={handleClear}></NumberPannel>
    </View>
}
export default MainPannel;