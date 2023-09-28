import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { PlusCircle } from 'phosphor-react-native';
import { colors } from '../../styles/global';

export function Home() {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={require('../../../assets/Logo.png')}></Image>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
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
        </View>
      </View>
    </View>
  );
}
