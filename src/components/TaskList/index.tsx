import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export function TaskList() {
  return (
    <View>
      <View style={styles.headerTaskList}>
        <View style={styles.titleTaskListContainer}>
          <Text style={[styles.titleTaskList, styles.createdText]}>
            Criadas
          </Text>
          <Text style={styles.numberTasks}>0</Text>
        </View>
        <View style={styles.titleTaskListContainer}>
          <Text style={[styles.titleTaskList, styles.completedText]}>
            Concluídas
          </Text>
          <Text style={styles.numberTasks}>0</Text>
        </View>
      </View>
      <View>
        <View>
          <Image source={require('../../../assets/Clipboard.png')}></Image>
          <Text>Você ainda não tem tarefas cadastradas</Text>
          <Text>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    </View>
  );
}
