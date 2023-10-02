import { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

type TaskProps = {
  text: string;
};

export function Task({ text }: TaskProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <TouchableOpacity>
        <View>
          <View></View>
          <Text>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
}
