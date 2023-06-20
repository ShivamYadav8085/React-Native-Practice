/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Counter from './src/CounterComponent/Counter';
import Greetings from './src/GreetingsComponent/Greetings';
import {
  Button,
  SafeAreaView,
  View,
} from 'react-native';
import ResetButton from './src/ResetButtonComponent/ResetButton';


function App(): JSX.Element {
  const [count,setCount] = useState(0);
  
  const increaseCountByOne =()=>{
    setCount(prevCount => prevCount+1);
  }
  const decreaseCountByOne = ()=>{
    setCount(prevCount=>prevCount>0?prevCount-1:0)
  }
  const resetCount = ()=>{
    setCount(0)
  }

  return (
  
      <View style={{flex:1, justifyContent:'center',alignItems:'center',borderBottomColor:"skyblue"}}>
        <Greetings greeting='Good Morning'></Greetings>
        <Counter count={count}></Counter>
        <View style={{flex:0.5, flexDirection:'row'}}>
        <Button title='Increase' onPress={increaseCountByOne} color={"skyblue"}/>
        <Button title='Decrease' onPress={decreaseCountByOne} color={'steelblue'}/>
        <ResetButton title='Reset' resetFunction={resetCount}></ResetButton>
        </View>
      </View>
    
  );
}


export default App;
