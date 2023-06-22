import React, { useState } from "react";
import { TextInput, View } from "react-native";
import NumberPannel from "./NumberPannel";

const MainPannel =()=>{
    const [value,setValue] = useState<string>("");
    const [operation,setOperation] = useState<string>("");
    const performOperation=(number1:number,number2:number,operation:string):number=>{
        let ans:number =0
        switch(operation){
            case "+":
                {
                    ans=number1+number2
                    break;
                }
            case "-":
                {
                    ans=number1-number2
                    break;
                }
            case "/":
                {
                    ans=number1/number2
                    break;
                }
            case "*":
                {
                    ans=number1*number2
                    break;
                }
            
        }
        return ans;
    }
    const handleInput=(v:string)=>{
        const lastCharacter = v[v.length-1]
        const operationPattern = /[*/+-]/
        if(operationPattern.test(lastCharacter)){
            setOperation(lastCharacter)
        }
        if(lastCharacter==="="){
        const numbers = value.split(operationPattern)
            const ans = performOperation(parseFloat(numbers[0]),parseFloat(numbers[1]),operation)
            console.log(ans)
            setValue(ans+"")
            console.log(numbers)
        }else
        setValue(v);
    }
    const handleClear=()=>{
        setValue("")
    }
    return <View>
        <TextInput style={{borderWidth:1,height:50,marginTop:200}} onChangeText={handleInput} value={value}></TextInput>
        <NumberPannel onInput={handleInput} onClear={handleClear} currentValue={value}></NumberPannel>
    </View>
}
export default MainPannel;