import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import EditTask from './components/EditTask'
import Create from './components/Create'

export type RootParamList={
    Home:undefined,
    Create:undefined,
    Update:TaskType,
}

export type TaskType = {
    id:number,
    taskName:string,
    isCompleted:boolean,
    createdAt:Date
}

const Stack = createNativeStackNavigator<RootParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Update' component={EditTask}/>
            <Stack.Screen name='Create' component={Create}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation