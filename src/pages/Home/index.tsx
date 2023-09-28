import { Image, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { TaskList } from '../../components/TaskList';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={require('../../../assets/Logo.png')}></Image>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Input />
          <TaskList />
        </View>
      </View>
    </View>
  );
}
