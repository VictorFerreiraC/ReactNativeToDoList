import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 24,
    width: 327,
    flexDirection: 'row'
  },

  headerInfoCriadas: {
    flexDirection: 'row',
    flex: 1
  },

  infoCriadas: {
    color: Colors.blue,
    width: 54,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },

  headerInfoConcluidas: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end'

  },
  
  infoConcluidas: {
    color: Colors.purple,
    width: 78,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },

  elipse: {
    width: 25,
    height: 19,
    borderRadius: 30,
    backgroundColor: Colors.gray400,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoElipse: {
    color: Colors.gray200,
    fontSize: 12,
    fontFamily: 'Inter-Bold'
  },

});

export default styles;