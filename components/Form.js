import { Text, View, Button, Image, StyleSheet, TextInput} from 'react-native';
import { gStyle } from '../styles/style';
import {Formik} from 'formik';


export default function Form({addArticle}) {

    const onSubmit = (values, action) => {
        addArticle(values)
        action.resetForm()
    }
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', img: '', full: ''}} onSubmit={onSubmit}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name} 
                            placeholder='Name' 
                            onChangeText={props.handleChange('name')} 
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.anons} 
                            placeholder='Anons' 
                            multiline
                            onChangeText={props.handleChange('anons')} 
                        />
                        <TextInput
                            style={styles.input} 
                            value={props.values.full} 
                            placeholder='Full'
                            multiline 
                            onChangeText={props.handleChange('full')} 
                        />
                        <TextInput
                            style={[styles.input, {marginBottom: 15}]} 
                            value={props.values.img} 
                            placeholder='Photo' 
                            onChangeText={props.handleChange('img')} 
                        />
                        <Button color="green" title="Add" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop:15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    },
})