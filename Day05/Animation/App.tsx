import { View, Text, Button, SafeAreaView, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {
  const value = useState(new Animated.Value(0))[0];
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
    backgroundColor:value.interpolate({
      inputRange:[0,500,1000],
      outputRange:["green","red","yellow"]
    })
  }}> 

</Animated.View>
<TouchableOpacity onPress={changeColor}>
    <Text>Click Me</Text>
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default App