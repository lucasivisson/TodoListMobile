import { PlusCircle } from 'phosphor-react-native';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../styles/global';

export function Input() {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, focus && styles.focus]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors['gray-300']}
        onFocus={() => setFocus(!focus)}
      />
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => console.log('oi')}>
        <PlusCircle color={colors['gray-100']} />
      </TouchableOpacity>
    </View>
  );
}
