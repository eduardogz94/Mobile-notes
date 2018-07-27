import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const addStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button:{
        borderColor: 'purple',
        width:'98%',
        marginLeft: 5,
    },
    description:{
       marginBottom: '10%', 
    }
});