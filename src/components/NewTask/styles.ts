import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
    width: 340,
    height: 54,
    
  },

  input: {
    width: 284,
    height: 50,
    backgroundColor: Colors.gray500,
    borderRadius: 6,
    marginLeft: 24,
    borderWidth: 1,
    borderBlockColor: Colors.gray700,
    paddingHorizontal: 16,
    fontFamily: 'Inter-regular',
    fontSize: 16,
    lineHeight: 22.4,
    color: Colors.gray100
  },

  inputFocused: {
    borderColor: Colors.purpleDark
  },

  placeholder: {
    color: Colors.gray300
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: Colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },

  icon: {
    width: 16,
    height: 16
  }
});

export default styles;