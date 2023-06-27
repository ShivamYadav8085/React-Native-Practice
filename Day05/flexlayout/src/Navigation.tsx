import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Setting from './components/Settings';
import TabNavigation from './TabNavigation';


export type User = {
  username:string,
  address:string,
  mobileno:string
}

export type RootStackParamList = {
  Register:undefined,
  Home:undefined,
  Login:User|undefined,
  Setting:undefined
}

const Navigation = () => {
  const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false)

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        {isAuthenticated?
                (<Stack.Group>
                  <Stack.Screen name='Register' component={Register}/>
                  <Stack.Screen name='Login' component={Login}/>
                </Stack.Group>):
                (<Stack.Group>
                  <Stack.Screen name='Home' component={TabNavigation} options={{headerShown:false}} />
              </Stack.Group>)
      }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation