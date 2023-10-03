import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Trash } from 'phosphor-react-native';
import { colors } from '../../styles/global';
import { useTask } from '../../Context/TaskStore';

type TaskProps = {
  id: number;
  text: string;
};

export function Task({ id, text }: TaskProps) {
  const { removeTask, checkTask } = useTask(state => state);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    checkTask(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch}>
        <View style={styles.radioTextContainer}>
          {isEnabled ? (
            <View style={styles.radioBackground}>
              <Text style={styles.correctSign}>✔</Text>
            </View>
          ) : (
            <View style={styles.radio}></View>
          )}

          <Text style={[styles.text, isEnabled && styles.lineThrough]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTask(id)}>
        <Trash color={colors['gray-300']} />
      </TouchableOpacity>
    </View>
  );
}
