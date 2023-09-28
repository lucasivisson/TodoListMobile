import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: colors['gray-700'],
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: colors['gray-600'],
    height: '100%',
  },
  footerContainer: {
    marginTop: -50,
  },
  inputContainer: {
    flexDirection: 'row',
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
  focus: {
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
