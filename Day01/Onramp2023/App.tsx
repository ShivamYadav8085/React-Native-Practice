/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Child  from './Child';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';




function App(): JSX.Element {
  const [text,setText] = useState<string>("");
  const [count,setCount] = useState<number>(0);
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello world</Text>

      <TextInput placeholder='Hello' onChangeText={value=>setText(value)}>
      </TextInput>
      <Child counter={count}/>
      <Text>{text.split(" ").map(word => word&&'🍕').join(" `")}</Text>
      <Button title='Count' onPress={()=>setCount(p=>p+1)}/>
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
