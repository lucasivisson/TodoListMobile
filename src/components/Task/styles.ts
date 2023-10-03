import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: colors['gray-500'],
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: colors['gray-100'],
    fontSize: 16,
  },
  radioTextContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: colors['blue'],
    borderRadius: 20,
    borderWidth: 2,
  },
  radioBackground: {
    backgroundColor: colors['purple'],
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  correctSign: {
    color: colors['gray-100'],
    fontSize: 12,
    textAlign: 'center',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: colors['gray-300'],
  },
});
