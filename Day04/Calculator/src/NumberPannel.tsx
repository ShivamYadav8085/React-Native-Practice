import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface IProp{
    currentValue:string,
    onInput:Function,
    onClear:Function
}

const NumberPannel = (props:IProp)=>{
    const numberPannelData = ["1","2","3","4","5","6","7","8","9","0",".","+","-","/","*","="]
    return <View style={{marginTop:50}}>
        <TouchableOpacity style={{marginLeft:320}} onPress={()=>props.onClear()}>
            <Text style={{fontSize:20}}>Clear</Text>
        </TouchableOpacity>
        <FlatList 
        data={numberPannelData} 
        numColumns={4}
        renderItem={({item})=>{
            return <View style={{margin:40}}>
                <TouchableOpacity onPress={()=>props.onInput(props.currentValue+item)}>
                <Text style={{fontSize:25}}>{item}</Text>
                </TouchableOpacity>
            </View>
        }}></FlatList>
    </View>
}

export default NumberPannel;