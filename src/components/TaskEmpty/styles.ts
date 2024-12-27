import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: 287,
    marginLeft: 24,
  },

  bold: {
    color: Colors.gray300,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: 'bold'
  },

  regular: {
    color: Colors.gray300,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19.6,
  }

});

export default styles;