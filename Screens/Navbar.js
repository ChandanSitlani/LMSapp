import * as React from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/search'
import Profile from '../Screens/profile'
import LogOut from '../Screens/Logout'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function ShowBooks({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Text>
        {route?.params?.owner ? `${route.params.owner}'s Profile` : ''}
      </Text>
    </View>
  );
}


class ProfileScreen extends React.Component{
      componentDidMount() {
    
  
    
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      this.setState({ loading: false, repos: allRepos });
      console.log(this.state);
    
  
});

  }

  render() {
      return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Text>
        {this.props.route?.params?.owner ? `${this.props.route.params.owner}'s Profile` : ''}
      </Text>
      <Button
        title="Go to profile"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
      );
};
}




function IssueScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Issue Page</Text>
      <Text>
        Coming Soon...
      </Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Navbar(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} component={HomeScreen} />
        <Tab.Screen name="Profile" options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} component={Profile} />
        <Tab.Screen name="Issue" options={{
          tabBarLabel: 'Issue',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shape-square-plus" color={color} size={26} />
          ),
        }} component={IssueScreen} />
        <Tab.Screen options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }} name="Login">{()=><LogOut text="hii" login={props.login} />}</Tab.Screen>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
