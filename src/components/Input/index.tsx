import { PlusCircle } from 'phosphor-react-native';
import { View, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../styles/global';

export function Input() {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, inputFocus && styles.inputFocus]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors['gray-300']}
        onFocus={() => setInputFocus(!inputFocus)}
      />
      <TouchableHighlight
        style={styles.buttonAdd}
        underlayColor={colors['blue']}
        activeOpacity={0.8}
        onPress={() => console.log('oi')}>
        <PlusCircle color={colors['gray-100']} />
      </TouchableHighlight>
    </View>
  );
}
