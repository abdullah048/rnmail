import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import Sidebar from './components/sidebar'
import DetailScreen from './screens/details'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200,
      }}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  )
}

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
