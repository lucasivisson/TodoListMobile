import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { PlusCircle } from 'phosphor-react-native';

export function Home() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/Logo.png')}></Image>
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
        />
        <TouchableOpacity onPress={() => console.log('oi')}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}
