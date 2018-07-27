import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const notesStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    notes: {
        backgroundColor: 'purple',
        borderRadius: 20
    },
    text:{
        fontWeight: '900'
    },
    description:{
        fontWeight: '900',
        marginLeft: '40%',
    }
});
