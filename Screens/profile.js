
import React,{useEffect} from 'react';
import axios from 'axios'
import IssuedBooks from '../Screens/issued_books';

import { View,StyleSheet,Text,Button } from 'react-native';
import { BottomNavigation, Title, Card, Subheading } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBAL from '../global'
const Profile=(props)=>{

    
    const [user,setUser]=React.useState();

    const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);



    const fetchUser=()=>{
        const apiUrl = 'https://lmsappapi.herokuapp.com/profile';
    axios.get(apiUrl,{headers: {
            'Content-Type': 'application/json',
            'authorization':global.token
        }}).then((data) => {
      const User = data.data.user;
      console.log(User,GLOBAL.token);
      setUser(User);
      console.log(user);
    }
    );
}

    console.log(user)

    useEffect(()=>{fetchUser()},
    []);

    

    return(
        <View style={styles.container}><Title>Profile</Title>
        <Title> </Title>
        {'\n'}
        <MaterialCommunityIcons name="account-outline" size={33} />
        {'\n\n'}{user?.name}'s profile

        <Text>Name: {user?.name}{'\n'}</Text>
        <Text>email: {user?.email||'N/A'}{'\n\n'}</Text>
        <Text>Issued Books{'\n'}</Text>
        <IssuedBooks />
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
      justifyContent:'center',
      alignItems:'center',
    flex: 1,
    
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Profile