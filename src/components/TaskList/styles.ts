import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export const styles = StyleSheet.create({
  headerTaskList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleTaskListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleTaskList: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
  numberTasks: {
    fontSize: 16,
    backgroundColor: colors['gray-400'],
    color: colors['gray-200'],
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
  },
  createdText: {
    color: colors['blue'],
  },
  completedText: {
    color: colors['purple'],
  },
});
