import * as React from 'react';
import { View,Button,AsyncStorage } from 'react-native';
import { BottomNavigation,TextInput, Text,Subheading } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import GLOBAL from '../global'

const handleSubmit=(book,author)=>{


}

import ShowBooks from '../Screens/show_books';

const Stack = createStackNavigator();

const stackNav=(<Stack.Navigator>
          <Stack.Screen name="Show" component={ShowBooks} />
          </Stack.Navigator>)

function HomeScreen({ navigation }) {
    const [submitted,setSubmitted]=React.useState(false);
    const [book, setBook] = React.useState('');
    const [loggedin,setLogin]=React.useState(GLOBAL.loggedIn);
    const [author, setAuthor] = React.useState('');
    const showText="Please Enter Book Name"
  return (
      
      
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Subheading>Search!</Subheading>

      <TextInput
      label="Book Name"
      mode="outlined"
      value={book}
      onChangeText={text => {setBook(text);setSubmitted(false)}}
    />

    <TextInput
      label="Author Name"
      mode="outlined"
      value={author}
      onChangeText={text => {setAuthor(text);setSubmitted(false)}}
    />
      <Button
        title="Search"
        onPress={() => setSubmitted(true)}
      />
      

      {submitted==false?<Text>Please enter book and author details</Text>:<ShowBooks author={author} book={book} />}
    </View>
  );
}

export default HomeScreen;
