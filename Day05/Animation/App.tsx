import { View, Text, Button, SafeAreaView, Animated, TouchableOpacity, Switch } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {
  const value = useState(new Animated.Value(0))[0];
  const [enable,setEnable] = useState<boolean>(false);
  const handleSwitchChange = ()=>{
    setEnable(prev=>!prev)
    changeColor();

  }
  const changeColor = ()=>{
    // Animated.timing(value,{
    //   toValue:{x:100,y:100},
    //   duration:1000,
    //   useNativeDriver:false
    // }).start()
    Animated.timing(value,{
      toValue:1000,
      duration:1000,
      useNativeDriver:false
    }).start()
  }
  return (
    <SafeAreaView style={{flex:1}}>
<Animated.View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:value.interpolate({
      inputRange:[0,500,1000],
      outputRange:[enable?"red":"green","yellow",enable?"green":"red"]
    })
  }}> 
  <Switch value={enable} onValueChange={handleSwitchChange}/>

</Animated.View>
    </SafeAreaView>
  )
}

export default App