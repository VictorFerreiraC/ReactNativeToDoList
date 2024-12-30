import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
    marginTop: 20
  },

  list: {
    width: 340
  },

  task: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    backgroundColor: Colors.gray500,
    borderWidth: 1,
    borderColor: Colors.gray400,
    borderRadius: 8,
    marginBottom: 8
  },

  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginLeft: 12,
  },

  checkedCircle: {
    backgroundColor: Colors.purpleDark,
    borderColor: Colors.purpleDark
  },

  taskText: {
    color: Colors.gray100,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19.6,
    flex: 1
  },

  done: {
    textDecorationLine: 'line-through',
    color: Colors.gray300,
  },

  trash: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;