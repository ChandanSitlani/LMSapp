import * as React from 'react';
import { View,Button,Alert,AsyncStorage } from 'react-native';
import { BottomNavigation,TextInput, Text,Subheading } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import GLOBAL from '../global'




const Login=(props)=> {
    const [submitted,setSubmitted]=React.useState(false);
    
    const [username,setUsername]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [res,setRes]=React.useState('');
    const showText="Please Enter Book Name"

    const logIn=()=>{
        const apiUrl = 'https://lmsappapi.herokuapp.com/login/';
    console.log(apiUrl)
    
    axios.post(apiUrl,{username:username,password:password},{headers: {
            'Content-Type': 'application/json',
        }}).then((data) => {
      const token = data.data.token;
      console.log("data",data);
      
            if(token)
            {props.login(true);global.token=token;}
            else
            setRes("invalid username/pass")
      return token;
      
      
    
    
        
        }).catch(()=>{setRes('invalid username or password')});
        

    }
  return (
      
      
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Subheading>Login</Subheading>

      {res}
      <TextInput
      label="Username"
      mode="outlined"
      value={username}
      onChangeText={text => {setUsername(text);setSubmitted(false)}}
    />

    <TextInput
      label="Password"
      mode="outlined"
      value={password}
      onChangeText={text => {setPassword(text);setSubmitted(false)}}
    />
      
      <Button
        title="Log In"
        onPress={() => {setSubmitted(true);logIn();}}
      />

      {submitted?"yes":"no"}
    </View>
  );
}

export default Login;
