import { View, Text, Button, SafeAreaView, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {
  const value = useState(new Animated.Value(0))[0];
  const moveBall = ()=>{
    // Animated.timing(value,{
    //   toValue:{x:100,y:100},
    //   duration:1000,
    //   useNativeDriver:false
    // }).start()
    Animated.timing(value,{
      toValue:100,
      duration:1000,
      useNativeDriver:false
    }).start()
  }
  return (
    <SafeAreaView>
<Animated.View style={{
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:value.interpolate({
      inputRange:[0,100],
      outputRange:["green","red"]
    })
  }}> 

</Animated.View>
<TouchableOpacity onPress={moveBall}>
    <Text>Click Me</Text>
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default App