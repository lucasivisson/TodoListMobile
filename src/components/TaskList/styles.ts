import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export const styles = StyleSheet.create({
  headerTaskList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleCreated: {
    fontSize: 14,
    color: colors['blue'],
    fontWeight: 'bold',
  },
});
