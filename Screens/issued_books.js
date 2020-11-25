
import React, { useEffect } from 'react';
import { ScrollView, View, StatusBar, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import { BottomNavigation, TextInput, Text, Title, Card, Subheading } from 'react-native-paper';
import ShowCard from '../Screens/show_card';
import axios from 'axios'
import GLOBAL from '../global'
const IssuedBooks = (props) => {

    const [bookData, setBookData] = React.useState()

    const fetchBooks = () => {


        const apiUrl = 'https://lmsappapi.herokuapp.com/issued';
        axios.get(apiUrl,{headers: {
            'Content-Type': 'application/json',
            'authorization':global.token
        }}).then((data) => {
            const issued = data.data;
            console.log("issued",issued);
            setBookData(issued);
            


        });
    }
    console.log(bookData, setBookData);

    useEffect(() => {
        fetchBooks()
    }, [])
    useEffect(() => { console.log(bookData); }, [])




    const renderItem = (item) => {
        return (
            <Text key={item.id} title={item.title} />
        );
    }

    return (
        <SafeAreaView style={styles.container} width="100%">
            
            <FlatList
                data={bookData}
                extraData={bookData}
                renderItem={({ item }) =>( <Card style={styles.item}>
                    <Text>
                        {"Name: "}{item.name}{'\n'}
                        <Text>Acc No: {item.AccNo}{'\n'}</Text>
                        <Text>Due On: {item.Due_on}</Text>
                        
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
    title: {
        fontSize: 32,
    },
});

export default IssuedBooks;

    
