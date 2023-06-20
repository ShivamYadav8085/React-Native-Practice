import { useState } from "react"
import { View, TextInput, Button } from "react-native"

interface IChange{
    changeTextValue:Function
}

const TakeInput = (props:IChange)=>{
    const [textValue,setTextValue] = useState("")
    return <View>
        <TextInput onChangeText={setTextValue} style={{
            borderWidth:1,
            height:50,
            width:400
        }}/>
        <Button title="Click" onPress={()=>props.changeTextValue(textValue)}/>
    </View>
}

export default TakeInput;