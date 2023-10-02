import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    borderTopColor: colors['gray-400'],
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  title: {
    paddingTop: 20,
    fontWeight: 'bold',
  },
  text: {
    color: colors['gray-300'],
    fontSize: 16,
  },
});
