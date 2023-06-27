import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/register';
import Login from './components/Login';
import Home from './components/Home';
import Setting from './components/Settings';

const Navigation = () => {
  const [isAuthenticated,setIsAuthenticated] = useState<boolean>(true)

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        {isAuthenticated?
                (<Stack.Group>
                <Stack.Screen name='Register' component={Register}/>
               <Stack.Screen name='Login' component={Login}/>
             </Stack.Group>):
        (<Stack.Group>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Settings' component={Setting}/>
      </Stack.Group>)
      }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation