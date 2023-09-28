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
});
