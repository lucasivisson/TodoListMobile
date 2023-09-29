import { Text, View } from 'react-native';
import { styles } from './styles';

export function TaskList() {
  return (
    <View>
      <View style={styles.headerTaskList}>
        <View>
          <Text style={styles.titleCreated}>Criadas</Text>
        </View>
        <View>
          <Text>Concluídas</Text>
        </View>
      </View>
    </View>
  );
}
