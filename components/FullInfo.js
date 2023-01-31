import { Text, View, Button, Image, StyleSheet} from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({route}) {
    const item = route.params

    return (
        <View style={gStyle.main}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text style={[gStyle.title, gStyle.header]}>{item.name}</Text>
            <Text style={styles.full}>{item.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    image: {
        width: '100%', 
        height: 200
    }
})