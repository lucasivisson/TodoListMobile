import { PlusCircle } from 'phosphor-react-native';
import { View, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../styles/global';
import { TaskType, useTask } from '../../Context/TaskStore';
import { getRandomInt } from '../../utils/getRandomInt';

export function Input() {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const { addTask } = useTask(state => state);

  function handleAddTask() {
    const task: TaskType = {
      id: getRandomInt(1, 1000000),
      text: inputValue,
      completed: false,
    };
    if (inputValue !== '') {
      addTask(task);
      setInputValue('');
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, inputFocus && styles.inputFocus]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors['gray-300']}
        onFocus={() => setInputFocus(!inputFocus)}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <TouchableHighlight
        style={styles.buttonAdd}
        underlayColor={colors['blue']}
        activeOpacity={0.8}
        onPress={() => handleAddTask()}>
        <PlusCircle color={colors['gray-100']} />
      </TouchableHighlight>
    </View>
  );
}
