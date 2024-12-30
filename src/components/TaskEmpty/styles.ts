import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.gray400,
  },

  image: {
    width: 56,
    height: 56,
    resizeMode: 'contain', // Ajusta a imagem ao tamanho definido sem distorcer
    marginTop: 48,
    marginBottom: 16
  },

  bold: {
    color: Colors.gray300,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 19.6,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  regular: {
    color: Colors.gray300,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19.6,
    textAlign: 'center'
  }

});

export default styles;