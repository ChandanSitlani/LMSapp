import * as React from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/search'
import Profile from '../Screens/profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Login from '../Screens/Login'








const Tab = createMaterialBottomTabNavigator();

export default function LoggedOut(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} icon='home' component={HomeScreen} />
        
  <Tab.Screen options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }} name="Login">{()=><Login text="hii" login={props.login} />}</Tab.Screen>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
