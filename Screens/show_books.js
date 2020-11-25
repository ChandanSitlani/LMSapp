import React,{useEffect} from 'react';
import { ScrollView, View,StatusBar,StyleSheet,SafeAreaView,FlatList,Button } from 'react-native';
import { BottomNavigation,TextInput, Text, Title, Card, Subheading } from 'react-native-paper';
import ShowCard from '../Screens/show_card';
import axios from 'axios'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ShowBooks=(props)=>{

    const initialState=[{"title":"Select"}]



    const [bookData,setBookData]=React.useState()

    const fetchBooks=()=>{
        const book=props.book;
    const author=props.author;
        

    const apiUrl = 'https://lmsappapi.herokuapp.com/search/';
    console.log(apiUrl)
    
    axios.post(apiUrl,{bname:book,aname:author},{headers: {
            'Content-Type': 'application/json',
        }}).then((data) => {
      const books = data.data;
      console.log("data",books);
      setBookData(books);

      return data;
      
      
    
    });
}
console.log(bookData,setBookData);

    useEffect(()=>{
        fetchBooks()
    },[])
    useEffect(()=>{console.log(bookData);},[])

    
    
    
        const renderItem = ( item ) => {return (
    <Text key={item.id} title={item.title} />
  );
        }

        return (
        <SafeAreaView style={styles.container} width="100%">
            {bookData?<Text>Total Books:{bookData.length}</Text>:<Text>Searching ...</Text>}
            
            {props.book}{'\n'}
            {props.author}
      <FlatList
        data={bookData}
        extraData={bookData}
        renderItem={({item}) => (<Card style={styles.item}>
            <Text>{"Name: "}{item.name}{'\n'}
            <Text>Author: {item.author}{'\n'}</Text>
            <Text>Acc No.: {item.AccNo}{'\n'}</Text>
            <Text>Shelf No.: {item.ShelfNo||'Unknown'}{'\n'}</Text>
            <Text style={item.Status=='Available'?styles.available:styles.issued}>Status: {item.Status}{'\n'}</Text>

            </Text>
            </Card>)}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );

  

  
        


        
        
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  issued:{
      color: '#FF0000',
  },
  available:{
      color: '#008000',
  },
  title: {
    fontSize: 32,
  },
});



export default ShowBooks;