import { Image, View, Text } from 'react-native';
import { styles } from './styles';

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Clipboard.png')}></Image>
      <Text style={[styles.title, styles.text]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
