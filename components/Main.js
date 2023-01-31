import {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal} from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons'
import Form from './Form';

export default function Main({navigation}) {

    const [modalWindow, setModalWindow] = useState(false)

    const loadScene = () => {
        navigation.navigate('FullInfo')
    } 
    
    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: 1, img: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: 2, img: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'},
        {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool!', key: 3, img: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'},
    ])

    const addArticle = (article) => {
        setNews((prev) => [{...article, key: Math.random().toString()}, ...prev])        
        setModalWindow(false)
    }  

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
                    <Text style={styles.title}>
                        Add post
                    </Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
            <Text style={[gStyle.title, styles.header]}>Main Page</Text>
            <FlatList 
                data={news}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)} key={item.key}>
                        <Image style={styles.image} source={{ uri: item.img }} />
                        <Text style={styles.title}>{ item.name }</Text>
                        <Text style={styles.anons}>{ item.anons }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    iconClose: {
        textAlign: 'center',
    },  
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },  
    header: {
        marginBottom: 30,
    },  
    item: {
        width: '100%',
        marginBottom: 30
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    image: {
        width: '100%', 
        height: 200
    }
})