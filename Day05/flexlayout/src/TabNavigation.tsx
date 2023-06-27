import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from './Navigation'
import Home from './components/Home'
import Setting from './components/Settings'
const Tab = createBottomTabNavigator<RootStackParamList>()

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home}></Tab.Screen>
        <Tab.Screen name='Setting' component={Setting}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigation