import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

interface IChange{
    changeTextValue:Function
}

const styles = StyleSheet.create({
    TextInput:{
        borderWidth:1,
            height:50,
            width:400,
            padding:16,
            borderColor:"blue"
        
    }
})

const TakeInput = (props:IChange)=>{
    const [textValue,setTextValue] = useState("")
    return <View>
        <View style={styles.TextInput}>
        <TextInput onChangeText={setTextValue} />
        </View>    
        <Button title="Add To Do" onPress={()=>{
            setTextValue("");
            props.changeTextValue(textValue)
            }}/>
    </View>
}

export default TakeInput;