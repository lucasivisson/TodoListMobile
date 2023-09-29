import { colors } from '../../styles/global';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: colors['gray-500'],
    color: colors['gray-300'],
    fontSize: 16,
    padding: 15,
    height: 60,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  inputFocus: {
    borderColor: colors['purple'],
    borderWidth: 1,
  },
  buttonAdd: {
    width: 60,
    height: 60,
    backgroundColor: colors['blue-dark'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  plusIcon: {
    color: colors['gray-100'],
  },
});
