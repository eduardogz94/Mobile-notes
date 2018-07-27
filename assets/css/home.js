import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  notes: {
    backgroundColor: 'purple',
    borderRadius: 20
  }
});
