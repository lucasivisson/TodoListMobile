import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { styles } from './styles';
import { useTask } from '../../Context/TaskStore';
import { EmptyTaskList } from '../EmptyTaskList';
import { Task } from '../Task';

export function TaskList() {
  const { tasks, completed, created } = useTask(state => state);

  return (
    <View style={{ height: '35%' }}>
      <View style={styles.headerTaskList}>
        <View style={styles.titleTaskListContainer}>
          <Text style={[styles.titleTaskList, styles.createdText]}>
            Criadas
          </Text>
          <Text style={styles.numberTasks}>{created}</Text>
        </View>
        <View style={styles.titleTaskListContainer}>
          <Text style={[styles.titleTaskList, styles.completedText]}>
            Concluídas
          </Text>
          <Text style={styles.numberTasks}>{completed}</Text>
        </View>
      </View>
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Task id={item.id} text={item.text}></Task>}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={<EmptyTaskList />}
        />
      </SafeAreaView>
    </View>
  );
}
