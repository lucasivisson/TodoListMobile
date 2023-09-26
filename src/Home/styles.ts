import { StyleSheet } from 'react-native';
import { colors } from '../styles/global';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: colors['gray-700'],
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: colors['gray-600'],
    height: '100%',
  },
  textInput: {
    backgroundColor: colors['gray-500'],
    padding: 15,
    borderRadius: 5,
  },
});
