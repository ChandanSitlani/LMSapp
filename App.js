import React,{useEffect} from 'react';
import { ScrollView,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';

import Navbar from './Screens/Navbar';
import LoggedOut from './Screens/LoggedOut';



function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </ScrollView>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();

export default function App() {

    const [loggedIn,setLogin]=React.useState(false)

  return (
      loggedIn?
   <Navbar login={setLogin} />:<LoggedOut login={setLogin}/>
  );
}