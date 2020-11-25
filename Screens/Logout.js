import * as React from 'react';
import { View,Button,Alert,AsyncStorage } from 'react-native';
import { BottomNavigation,TextInput, Text,Subheading } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import GLOBAL from '../global'






    

    const LogOut=(props)=>{
        
        React.useEffect(()=>{
            props.login(false);

        });

    
  return (
      
      
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Subheading>Search!</Subheading>

      
     
      
    </View>
  );
}

export default LogOut;
